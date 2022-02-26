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
    chatBody: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    /*chatWidow: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },*/
    message: {
        "& #you": {
            justifyContent: 'flex-start'
        },
        "& #other": {
            justifyContent: 'flex-end',
        },
    },
    messageMeta: {
        "& #you": {
            justifyContent: 'flex-start',
            marginLeft: '5px',
          },
        "& #other": {
            justifyContent: 'flex-end',
            marginRight: '5px',
        },
        "& #time": {
            justifyContent: 'flex-start',
            marginLeft: '5px',
          },
        "& #author": {
            marginLeft: '10px',
            fontWeight: 'bold',
        },
    },
    messageContent: {
        justifyContent: 'flex-start',
        marginLeft: '5px',
        width: 'auto',
        height: 'auto',
        minheight: '40px',
        maxWidth: '120px',
        backgroundColor: '#43a047',
        borderRadius: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        marginRight: '5px',
        paddingRight: '5px',
        paddingLeft: '5px',
        overflowWrap: 'break-word',
        wordbreak: 'break-word',  
        "& #other": {
            justifyContent: 'flex-end',
            backgroundColor: 'cornflowerblue',
        }
    },
}));

export default useStyles