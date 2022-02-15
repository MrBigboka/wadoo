import useStyles from '../styles';
import { Typography } from '@mui/material';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center">
                Wadoo
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                est un projet réalisé par Miguel et Jérémy pour le cours de Veille Technologique
            </Typography>
        </footer>
    )
}

export default Footer;
