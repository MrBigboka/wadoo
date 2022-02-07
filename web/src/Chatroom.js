import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import { Container, CardContent, CardHeader, Card, TextField, Button } from '@material-ui/core'

const PORT = 4000;

const socket = io.connect(`http://localhost:${{PORT}}`) //Pour connecter le backend au frontend

//Cette page c'est juste pour tester socket.io le design on le refera
const Chatroom = () => {
    const [state, setState] = useState({message: '', name: ''})
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
        })
    })


    const onTextChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onMessageSubmit = (e) => {
        e.preventDefault() //Pour pas refresh la page
        const {name, message} = state.message
        socket.emit('message', {name, message})
        setState({ message: '', name })
    }

    const renderChat = () => { //Fonction pour faire le rendu du chat
        return chat.map(({name, message}, index) => (
            <div key={index}>
                <h3>
                     {name}: <span>{message}</span> 
                </h3>
            </div>
        ))
    }

    return (
        <>
        <main>
            <Container maxWidth="md">
                <Card>
                    <CardContent>
                        <form onSubmit={onMessageSubmit}>
                            <h1 variant="h1"> Chatroom </h1>
                            <div className="name-field">
                                <TextField 
                                    name="name" 
                                    onChange={ e => onTextChange(e)} 
                                    value={state.name} 
                                    label="Utilisateur"
                                />
                            </div>
                            <br/>
                            <div>
                                <TextField
                                    name="message"
                                    onChange={e => onTextChange(e)}
                                    value={state.message}
                                    label="Message"
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                            <Button variant="contained"> Envoyer le message </Button>
                        </form>
                    </CardContent>
                </Card>
                <br/>
                <Card className="render-chat">
                    <h1> Chat Log </h1>
                    <CardContent>
                        {renderChat()}
                    </CardContent>
                </Card>
            </Container>
        </main>
        </>
    )
}

export default Chatroom;

