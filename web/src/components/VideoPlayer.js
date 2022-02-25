import React, { useContext, useRef, useEffect } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import useStyles from '../styles';

import { SocketContext } from '../SocketContext'


function VideoPlayer() {
    const videoRef = useRef(null);
    const classes = useStyles(); 
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  
    useEffect(() => {
      const getUserMedia = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({video: true});
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.log(err);
        }
      };
      getUserMedia();
    }, []);
  
    return (
      <div>
        <video className={classes.VideoPlayer}
          ref={videoRef}
          autoPlay
        />
      </div>
    );
  }


export default VideoPlayer



