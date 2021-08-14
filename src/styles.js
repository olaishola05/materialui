import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },

    icon:{
        marginRight: '20px'
    },

    button:{
        marginTop: '40px'
    },

    btns:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px', 
    },

    cardGrid: {
        padding: '20px 0'
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 3px 5px 2px rgba(255, 100, 135, .3)',
    },

    cardMedia: {
        paddingTop: '56.25%'
    },

    cardContent: {
        flexGrow: 1,
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}))

export default useStyles;