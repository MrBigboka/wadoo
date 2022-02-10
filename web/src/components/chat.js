import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@material-ui/core'
//CSS à refaire avec MUI je le fait plus tard dans la soirée ..
//To do : CSS / Installer react-scroll-to-bottom ou pt avec MUI il y a un scroll to bottom 
//Pt pas nécessaire si le chat est petit

const Chat = ({socket, username, room}) => {

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
        <div className="chat-window">
            <div className="chat-header"></div>
                <h1 variant="h1"> Live chat</h1>
            <div className="chat-body"></div>
                {messageList.map((data) => {
                    return (
                        <div className="message" id={username === data.author ? "you" : "other"}> 
                            <h5>{data.time} {data.author}: {data.message}</h5>
                        </div>
                    )
                })}
            <div className="chat-footer"> 
                <TextField 
                    type="text" 
                    placeholder="Hello.."
                    value={message}
                    onChange={(event) => {
                        setMessage=(event.target.value);
                    }}
                    onKeyPress={(event) => 
                        {event.key === 'Enter' && sendMessage()
                    }}
                />
                <Button onClick={sendMessage}>&#9658;</Button>
            </div>
        </div>
    )
}

export default Chat
