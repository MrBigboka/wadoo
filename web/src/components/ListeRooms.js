import React, {useState} from 'react';
import Chat from '../components/Chat';
import { Button, Grid, Card, CardContent, CssBaseline, CardActions, Typography } from '@material-ui/core';
import useStyles from '../styles';
import io from 'socket.io-client';

function ListeRooms({username}) {
    const PORT = 3001;
    const socket = io.connect(`http://localhost:${PORT}`); //Pour connecter le frontend au backend

    const classes = useStyles(); 
    const [roomList, setRoomList] = useState(['general', 'room1', 'room2', 'room3', 'room4', 'room5']);
    const [showChat, setShowChat] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState('')


    const joinRoom = () => {
        if (username !== "" && selectedRoom !== "") {
            console.log(selectedRoom)
            socket.emit("join_room", selectedRoom);
            setSelectedRoom(selectedRoom)
            setShowChat(true);
        }
    }

    return (
        <>
        <CssBaseline/>
            <main>
                { !showChat ? (
                    <div>
                    <Typography variant='h5'> Votre nom d'utilisateur est: <b> {username} </b> </Typography>
                    <br/>
                        <div>
                            <Grid container spacing={2}>
                                {roomList.map((room) => (
                                    <Grid item key={room} xs={12} sm={6} md={4}>
                                        <Card> 
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant='h5'>
                                                    {room}
                                                </Typography>                                              
                                                <CardActions>
                                                    <Button 
                                                        size="small" variant="contained"
                                                        onClick={() => {
                                                            setSelectedRoom(room)
                                                            joinRoom() 
                                                        }} 
                                                        >
                                                            Rejoindre la room
                                                    </Button>
                                                </CardActions>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid> 
                        </div>
                    </div>
                ) : 
                ( <Chat socket={socket} username={username} room={selectedRoom}/>)
                }
            </main>
        </>
    )
}

export default ListeRooms;