const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors'); //cors permet de régler des problèmes de connexion
const { Server } = require("socket.io");
//const { isKeyObject } = require('util/types');
app.use(cors());

const PORT = 3001;
const server = http.createServer(app);

const io = new Server(server, { 
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"], //Déclare les méthodes autorisées
    }
});

function getActiveRooms(io) {
    // Convert map into 2D list:
    // ==> [['4ziBKG9XFS06NdtVAAAH', Set(1)], ['room1', Set(2)], ...]
    const arr = Array.from(io.sockets.adapter.rooms);
    // Filter rooms whose name exist in set:
    // ==> [['room1', Set(2)], ['room2', Set(2)]]
    const filtered = arr.filter(room => !room[1].has(room[0]))
    // Return only the room name: 
    // ==> ['room1', 'room2']
    const res = filtered.map(i => i[0]);
    console.log(`Liste des rooms actives : ${res}`)
    return res;
}

io.on("connection", (socket) => { //Cette fonction sert à donner un ID aux personnes connectés
    console.log(`L'utilisateur ${socket.id} s'est connecté`);
    socket.emit('me', socket.id)

    socket.on("join_room", (data) => { //Rejoindre une room
        socket.join(data);
        console.log(`L'utilisateur : ${socket.id} a rejoint la room: ${data}`);
    });

    socket.on("send_message", (data) => { //Envoi le message vers la room ou le message à été écrit
        socket.to(data.room).emit("receive_message", data); 
    });

    socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name })
    })

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal)
    })

    socket.on("room_list", (data) => {
         //Envoi le message vers la room ou le message à été écrit
        socket.join(data);
        socket.to(data).emit("receive_room", getActiveRooms(io)); 
    });

    socket.on("disconnect", () => { //Déconnexion
        console.log(`L'utilisateur ${socket.id} s'est déconnecté`);
        socket.broadcast.emit("callended")
    });
});

server.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});