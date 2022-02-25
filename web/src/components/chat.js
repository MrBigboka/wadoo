import React, {useState, useEffect} from 'react';
import { TextField, Button, Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';    
import useStyles from '../styles';
import VideoPlayer from './VideoPlayer'

//CSS à refaire avec MUI je le fait plus tard dans la soirée ..
//To do : CSS / Installer react-scroll-to-bottom ou pt avec MUI il y a un scroll to bottom 
//Pt pas nécessaire si le chat est petit

const Chat = ({socket, username, room}) => {
    const classes = useStyles(); 
    const [message, setMessage] = useState(""); 
    const [messageList, setMessageList] = useState([]); //Contiens les messages de la room

    const sendMessage = async () => { //Pour envoyer les messages vers le backend
        if (message !== "") {
            const messageData = {
                room: room,
                author: username,
                message: message,
                time: 
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((liste) => [...liste, messageData])
            setMessage(""); //Le chat redeviendra vide
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((liste) => [...liste, data]); 
            //... permet de garder la liste de message et ajouter le nouveau message
        })  
    }, [socket]);

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={4}> {/*WebRTC*/}
                <Card className={classes.VideoCard}>
                    <CardContent className={classes.cardContent}>
                        <span> WebRTC Stranger </span>
                    </CardContent>
                    <VideoPlayer />
                </Card>
                <Card className={classes.VideoCard}>
                    <CardContent className={classes.cardContent}>
                        <span> WebRTC User </span>
                    </CardContent>
                    <VideoPlayer />
                </Card>
            </Grid> {/*Chat*/}
            <Grid item xs={8}>
                <Card className={classes.Card}>
                    <CardContent className={classes.cardContent}>
                        <div className="chat-window">
                            <div className="chat-header">
                                <h1 variant="h1"> Live chat</h1>
                            </div>
                            <div className="chat-body">
                                <Typography variant='caption'> 
                                    Vous discutez maintenant avec un inconnu au hasard. Pourquoi ne pas faire connaissances !
                                </Typography>
                                {messageList.map((data) => {
                                    return (
                                        <div className="message" id={username === data.author ? "you" : "other"}> 
                                            <h5>{data.time} {data.author}: {data.message}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={classes.chatFooter}> 
                                <TextField 
                                    className={classes.chatInput}
                                    name="message"
                                    value={message}
                                    placeholder="Écrire un message..."
                                    onChange={ e => 
                                        setMessage(e.target.value)
                                    }
                                    onKeyPress={(event) => {
                                        event.key === 'Enter' && sendMessage();
                                    }}
                                />
                                <Button 
                                    onClick={sendMessage} 
                                    color='primary' 
                                    variant="contained" 
                                    endIcon={<SendIcon />}>
                                    Envoyer
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default Chat;
