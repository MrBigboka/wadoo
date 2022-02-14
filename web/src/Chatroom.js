import React, {useState} from 'react';
import io from 'socket.io-client'
import Chat from './components/Chat'
import { Container, CardContent, Card, TextField, Button } from '@material-ui/core'

const PORT = 3001;

const socket = io.connect(`http://localhost:${PORT}`) //Pour connecter le frontend au backend

//Cette page c'est juste pour tester socket.io le design on le refera
const Chatroom = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    //Les rooms vont devoir être aléatoire selon la liste de user dans la file d'attente

    return (
        <>
        <main>
            <Container maxWidth="md">
                {!showChat ? (
                    <Card>
                    <CardContent>
                        <h1 variant="h1"> Chatroom </h1>
                        <div className="room-field">
                            <TextField 
                                name="name" 
                                onChange={ e => {
                                     setUsername(e.target.value) 
                                    }} 
                                label="Nom d'utilisateur"
                            />
                        </div>
                        <br/>
                        <div className="name-field">
                            <TextField 
                                name="room" 
                                onChange={ e => {
                                    setRoom(e.target.value) 
                                   }} 
                                label="ID d'une room.."
                            />
                        </div>
                        <br/>
                        <Button onClick={joinRoom} variant="contained"> Rejoindre une room </Button>
                    </CardContent>
                </Card>
                )
                :(
                <Chat socket={socket} username={username} room={room}/>
                )}
            </Container>
        </main>
        </>
    )
}

export default Chatroom;

