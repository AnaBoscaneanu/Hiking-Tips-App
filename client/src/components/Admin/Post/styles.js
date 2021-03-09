import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',        
        height: '100%',
        position: 'relative',
    },   
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0px"
    },
    title: {
        padding: "16px 16px 0"
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down("sm")]:
    {
        title: {
            fontSize: "2.5rem",
        },
        details: {
            fontSize: "1rem"
        },
    },
    [theme.breakpoints.down("xs")]:
    {
        title: {
            fontSize: "1.5rem",          
        },  
    }         
  }));