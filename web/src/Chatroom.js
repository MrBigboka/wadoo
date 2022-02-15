import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import Chat from './components/Chat'
import { Container, CardContent, Card, TextField, Button, CssBaseline, Typography } from '@material-ui/core'
import useStyles from './styles';
import { Stack } from '@mui/material';

const PORT = 3001;

const socket = io.connect(`http://localhost:${PORT}`) //Pour connecter le frontend au backend

//Cette page c'est juste pour tester socket.io le design on le refera
const Chatroom = () => {
    const classes = useStyles(); 

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        socket.on("receive_room", (data) => {
            setRoomList((liste) => [...liste, data]); 
            //... permet de garder la liste de message et ajouter le nouveau message
        })
    }, [socket]);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    const createRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("add_room", room);
            setShowChat(true);
        }
    }

    //Les rooms vont devoir être aléatoire selon la liste de user dans la file d'attente

    return (
        <>
        <CssBaseline/>
        <main>
            <div className={classes.container}>
            <Container maxWidth="md">
                {!showChat ? (
                    <div>
                        <Typography variant="h3" align="center"> Chatroom </Typography>
                        <div className="room-field" justify="center">
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
                                label="ID d'une room.."
                                onChange={ e => {
                                    setRoom(e.target.value) 
                                   }} 
                            />
                        </div>
                        <br/>
                        <Stack                         
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                        >
                            <Button onClick={joinRoom} color='primary' variant="contained"> Créer une room </Button>
                            <Button onClick={joinRoom} color='primary' variant="outlined"> Rejoindre une room </Button>
                        </Stack>
                    </div>
                )
                :(
                <Chat socket={socket} username={username} room={room}/>
                )}
            </Container>
        </div>
    </main>
    </>
    )
}

export default Chatroom;

