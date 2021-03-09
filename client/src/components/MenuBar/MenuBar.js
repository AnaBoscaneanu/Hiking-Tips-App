import React from "react";
import { Container, AppBar, Typography } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

import logo from "../../images/logo.png";
import useStyles from "./styles";

function MenuBar() {
    const classes = useStyles();

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={logo} alt="logo" height="70"/>
                <Link to={"/"} className={classes.heading}>
                   <Typography className={classes.heading} variant="h3" align="center">Hiking Tips</Typography> 
                </Link>                
            </AppBar>
        </Container>
    );
}

export default withRouter(MenuBar);