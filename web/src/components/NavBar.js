import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import useStyles from '../styles';

export default function NavBar() {
  const classes = useStyles(); 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link className={classes.styleRemover}
              to="/"> 
          <Typography 
            fontFamily={'WillyWonka'}
            variant="h6" 
            component="div"
            fontSize= '35px' 
            sx={{ flexGrow: 1 }}>
            WADOO
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
