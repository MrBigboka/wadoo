//import React, {useEffect, useState} from "react";
import { Typography, CssBaseline, Container, Button, Stack} from '@mui/material';
import Wadoo from './media/Wadoo2.png'
import useStyles from './styles';
import { Link } from "react-router-dom";

//import {serveur} from "./constantes"

const Home = () => {
    const classes = useStyles(); 
    return (
      <>
        <CssBaseline/>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <img style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }} 
                        alt='Wadoo'
                        src={Wadoo}/> 
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Bienvenue sur Wadoo. Le site numéro 1 pour faire de nouvelles connaissances !    
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                    >
                    <Link className={classes.styleRemover} to="/chatroom"> 
                        <Button size='large' variant="contained"> Clavarder Maintenant </Button>
                    </Link>
                    </Stack>
                </Container>
            </div>
        </main>
      </>
    );
}

export default Home;
