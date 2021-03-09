import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    title: {
        padding: "16px 16px",
      },
    [theme.breakpoints.down("sm")]:
    {
      title: {
        fontSize: "2.5rem",
      },  
    },
    [theme.breakpoints.down("xs")]:
    {
      title: {
        fontSize: "1.5rem",          
      },  
    }
}));
