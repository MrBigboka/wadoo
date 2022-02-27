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
    chatHeader: {
        display: 'flex',
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
    messageContainer: {
        display: 'flex',
        height: '100px',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    message: {
        width: '100%',
        minHeight: '100px',
        padding: '10px',
        "& #you": {
            justifyContent: 'flex-end',
        },
        "& #other": {
            justifyContent: 'flex-start',
        },
    },
    messageMeta: {
        display: 'flex',
        "& #you": {
            marginRight: '5px',
            justifyContent: 'flex-end',
          },
        "& #other": {
            marginRight: '5px',
            justifyContent: 'flex-start',
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
        "& #you": {
            justifyContent: 'flex-end',
            marginLeft: '5px',
            width: 'auto',
            height: 'auto',
            minHeight: '40px',
            maxWidth: '120px',
            borderRadius: '5px',
            color: 'white',
            alignItems: 'center',
            marginRight: '5px',
            paddingRight: '5px',
            paddingLeft: '5px',
            backgroundColor: 'cornflowerblue',
            overflowWrap: 'break-word',
            wordbreak: 'break-word',  
        },
        "& #other": {
            justifyContent: 'flex-start',
            marginLeft: '5px',
            width: 'auto',
            height: 'auto',
            minHeight: '40px',
            maxWidth: '120px',
            borderRadius: '5px',
            color: '#202020',
            display: 'flex',
            alignItems: 'center',
            marginRight: '5px',
            paddingRight: '5px',
            paddingLeft: '5px',
            overflowWrap: 'break-word',
            wordbreak: 'break-word',  
            backgroundColor: '#D3D3D3',
        }
    },
}));

export default useStyles;