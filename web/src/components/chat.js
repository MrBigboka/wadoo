import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core'
//CSS à refaire avec MUI je le fait plus tard dans la soirée ..
const Chat = ({socket, username, room}) => {

    const [message, setMessage] = useState(""); 

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
        }
    }
    return (
        <div>
            <div className="chat-header"></div>
                <h1 variant="h1"> Live chat</h1>
            <div className="chat-body"></div>
            <div className="chat-footer"> 
                <TextField 
                    type="text" 
                    placeholder="Hello.."
                    onChange={(event) => {
                        setMessage=(event.target.value);
                    }}/>
                <Button onClick={sendMessage}>&#9658;</Button>
            </div>
        </div>
    )
}

export default Chat
