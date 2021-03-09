import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    introSection: {
      position: "relative"
    }, 
    introDetails: {
      marginTop: "15%"
    },  
    media: {           
        paddingTop: "75%", // 16:9
        width:"100%" 
    },
    overlay: {
      position: "absolute",
      top: "0px",
      right: "20px",
    }, 
    details: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 0",
      whiteSpace: "pre-wrap"
    },
    likeButton: {
      color: "red"
    },
    postSection: {
      padding: "3% 0"
    },

    [theme.breakpoints.down("sm")]:
    {
      title: {
        fontSize: "2.5rem",
      },
      details: {
        fontSize: "1rem"
      },
      introDetails: {
        marginTop: "10%"
      }, 
      heading: {
        fontSize:"1.75rem"
      }

    },
    [theme.breakpoints.down("xs")]:
    {
      title: {
        fontSize: "1.5rem",        
      },
      overlay: {
        padding: "0px"
      },
      heading: {
        fontSize:"1.25rem"
      }
    }         
}));