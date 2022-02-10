const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors'); //cors permet de régler des problèmes de connexion
const { Server } = require("socket.io");
app.use(cors());

const PORT = 3001;
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: `http://localhost:${PORT}`,
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => { //Cette fonction sert à donner un ID aux personnes connectés
    console.log(`L'utilisateur ${socket.id} s'est connecté`)

    socket.on("join_room", (data) => { //Rejoindre une room
        socket.join(data)
        console.log(`L'utilisateur : ${socket.id} à rejoin la room: ${data}`)
    });

    socket.on("send_message", (data) => {
        console.log(data)
    });

    socket.on("disconnect", () => { //Déconnexion
        console.log(`L'utilisateur ${socket.id} s'est déconnecté`)
    });
})

server.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`)
});