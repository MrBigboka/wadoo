//import React, {useEffect, useState} from "react";
import { Typography, CssBaseline, Container, Button, Stack} from '@mui/material';
//import {serveur} from "./constantes"
import useStyles from './styles';

const Home = () => {
    const classes = useStyles(); 
    return (
      <>
        <CssBaseline/>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography align="center" variant="h1" gutterBottom>
                        Wadoo
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Bienvenue sur Wadoo. Le site numéro 1 pour faire de nouvelles connaissances !    
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                    >
                        <Button variant="contained">S'inscrire</Button>
                        <Button variant="outlined">Se connecter</Button>
                    </Stack>
                </Container>
            </div>
        </main>
      </>
    );
}

export default Home;
