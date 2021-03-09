import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundColor: '#59886b'
      },
      heading: {
        color: 'white', 
        textDecoration: 'none',       
      },
      image: {
        margin: '15px',        
      }      
}));