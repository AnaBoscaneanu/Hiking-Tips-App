import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      height: "100%",
      position: "relative",      
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    overlay: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "white"
    },
    readmore: {
      color: "#1a508b"
    },
    likeButton: {
      color: "red"
    },
    details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 16px"
    },
    title: {
      padding: "0 16px"
    },
    nolink:
    {
      textDecoration: 'none',    
    }      
  }));