import React, {useState, useEffect} from 'react';
import { Button, Grid, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import useStyles from '../styles';

function ListeRooms({socket, username}) {

    const classes = useStyles(); 
    const [roomList, setRoomList] = useState([]);
    const [webData, setWebData] = useState([]);
    
    useEffect(() => {
        socket.on("receive_room", (data) => {
            console.log('Data fetched', data)
            setWebData(data);
        });
        socket.on('error', (err) => {
            console.error('Error happened', err);
        })
        // remove the socket listener when component left!
        return () => {
            socket.close();
        }
    }, []);
    // second use effect if web data changed!
    useEffect(() => {
        if (webData) {
            // if webData is array of objects
            setRoomList([...roomList, ...webData]);
            //if webData is just objects    
            //refresh the local state
            setWebData([]);
        }
    }, [webData])
    
    


    return (
        <>
        {/*roomList !== undefined &&
            <div>
                <Grid container spacing={2}>
                    <Typography variant='h5'> Votre nom d'utilisateur est: <b> {username} </b> </Typography>
                    <Grid item xs={4}> 
                        <div> 
                            {roomList.map((room) => (
                                <Grid item key={room} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5">
                                                {{room}}
                                            </Typography>                                              
                                            <CardActions>
                                                <Button style={{ background:'#2E3B55'}} size="small" variant="contained">Rejoindre la room</Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))} 
                        </div>
                    </Grid>
                </Grid>
            </div>
                            */}
        </>
    )
}

export default ListeRooms