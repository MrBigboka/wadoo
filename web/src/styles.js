import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 20)
    },
    styleRemover: {
        paddingLeft: 13, 
        textDecoration: 'none',
        color: 'white'
    },
    footer: {
        backgroundColor: '#00b0ff',
        padding: '50px 0'
    },
    image: {
        height: '500px',
        width: '1000px'
    },
}));

export default useStyles