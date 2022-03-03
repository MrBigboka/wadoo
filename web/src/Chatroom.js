import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';
import SvgIcon from '@mui/material/SvgIcon';
import { Container, TextField, Button, CardContent, CssBaseline, Typography, InputAdornment, Checkbox, FormControlLabel, Card, HomeIcon  } from '@material-ui/core'
import useStyles from './styles';
import { Stack } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListeRooms from './components/ListeRooms';

const PORT = 3001;

const socket = io.connect(`http://localhost:${PORT}`); //Pour connecter le frontend au backend

//Cette page c'est juste pour tester socket.io le design on le refera
const Chatroom = () => {
    const classes = useStyles(); 

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [showRoomList, setShowRoomList] = useState(false);
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(true);
    const [enable, setEnable] = useState(false);

    const handleChecked = (event) => {
        setChecked(event.target.checked);
        if (event.target.checked === true) {
            handleEnable()
        } else {
            handleDisabled()
        }
    }

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    const createRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    const listeRoom = () => {
        if (username !== "") {
            socket.emit("room_list", 'roomList');
            setShowRoomList(true);
        }
    }

    const handleDisabled = () => {
        setDisable(true)
        setEnable(false)
    }

    
    const handleEnable = () => {
        setDisable(false)
        setEnable(true)
    }

    //Les rooms vont devoir être aléatoire selon la liste de user dans la file d'attente

    return (
        <>
        <CssBaseline/>
        <main>
            <div className={classes.container}>
            <Container maxWidth="md">
                { !showChat && !showRoomList && (
                    <div align='center'>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography style={{ fontFamily: 'WillyWonka'}} className={classes.title} variant="h1" align="center">
                                    Chatroom </Typography>
                                <div className="room-field" style={{ textAlign: 'center'}}>
                                    <TextField 
                                        name="name"
                                        required
                                        id="filled-hidden-label-normal"
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                            ),
                                        }}
                                        onChange={ e => {
                                            setUsername(e.target.value) 
                                            }} 
                                        label="Nom d'utilisateur"
                                    />
                                    <br/>
                                    <div style={{marginBottom: '20px'}}>
                                        <FormControlLabel
                                        label="Je souhaite créer une room."
                                        control={
                                            <Checkbox 
                                                checked={checked} 
                                                onChange={handleChecked} 
                                                color="primary" />
                                        }
                                        />
                                    </div>
                                </div>
                                <div className="name-field" style={{ textAlign: 'center'}}  >
                                    <TextField 
                                        disabled={disable}
                                        name="room"
                                        id="filled-hidden-label-normal"
                                        label="Nom de la room"
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                        style={{ width: '15pc', height: '3pc'}}
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
                                    <Button onClick={createRoom} disabled={disable} color='primary' variant="contained"> Créer une room </Button>
                                    <Button onClick={listeRoom} disabled={enable} color='primary' variant="outlined"> Liste des rooms </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </div>
                )}
                { showRoomList && (
                    <ListeRooms socket={socket} username={username}/>
                )} 
                { showChat && (
                    <Chat socket={socket} username={username} room={room}/>
                )}
            </Container>
        </div>
    </main>
    </>
    )
}

export default Chatroom;

