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
    inputText: {
        color: 'rgba(0,0,0,0.87)',
        fontSize: '16px',
        letterSpacing: '0.5px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    title: {
        marginBottom: '3pc',
        color: '#2196f3'
    },
    chatFooter: {
        marginTop: '24.5pc',

    },
    chatInput: {
        marginRight: '1pc',
        width: '26pc'
    },
    cardContent: {
        flexGrow: 5,
    },
    card: {
        width: '30pc',
        height: '30pc',
        display: 'flex',
    },  
    chatCard: {
        width: 'auto',
        height: '100%',
        display: 'flex',
    },
    VideoCard: {
        flexGrow: 5,
        marginBottom: '2pc',
    },
}));

export default useStyles