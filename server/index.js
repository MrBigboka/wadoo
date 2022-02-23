const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors'); //cors permet de régler des problèmes de connexion
const { Server } = require("socket.io");
app.use(cors());

const PORT = 3001;
const server = http.createServer(app);

const io = new Server(server, { 
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"], //Déclare les méthodes autorisées
    }
});

io.on("connection", (socket) => { //Cette fonction sert à donner un ID aux personnes connectés
    console.log(`L'utilisateur ${socket.id} s'est connecté`);
    socket.emit('me', socket.id)

    socket.on("join_room", (data) => { //Rejoindre une room
        socket.join(data);
        console.log(`L'utilisateur : ${socket.id} a rejoint la room: ${data}`);
        io.to(userToCall).emit("calluser", { signal: signalData, from, name })
        console.log(io.sockets.adapter.rooms) //Liste des rooms voir lundi comment envoyer ca du coté client
    });

    socket.on("send_message", (data) => { //Envoi le message vers la room ou le message à été écrit
        socket.to(data.room).emit("receive_message", data); 
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal)
    })

    socket.on("disconnect", () => { //Déconnexion
        console.log(`L'utilisateur ${socket.id} s'est déconnecté`);
        socket.broadcast.emit("callended")
    });
});

server.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});