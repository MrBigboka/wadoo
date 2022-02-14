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
        origin: 'http://localhost:3000', //port sur lequel le web run
        methods: ["GET", "POST"], //Déclare les méthodes autorisées
    }
});

io.on("connection", (socket) => { //Cette fonction sert à donner un ID aux personnes connectés
    console.log(`L'utilisateur ${socket.id} s'est connecté`);

    socket.on("join_room", (data) => { //Rejoindre une room
        socket.join(data);
        console.log(`L'utilisateur : ${socket.id} a rejoint la room: ${data}`);
    });

    socket.on("send_message", (data) => { //Envoi le message vers la room ou le message à été écrit
        socket.to(data.room).emit("receive_message", data); 
    });

    socket.on("disconnect", () => { //Déconnexion
        console.log(`L'utilisateur ${socket.id} s'est déconnecté`);
    });
});

server.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});