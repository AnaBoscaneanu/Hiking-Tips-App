import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import Form from "../Admin/Form/Form";
import Post from "./Post/Post";


function Admin({ currentId, setCurrentId, posts }) {
    const classes = useStyles();       

    return (
        <Container className={classes.mainContainer} direction="column" maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>                    
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h3">All Posts:</Typography>
                    <Grid container spacing={3}>                        
                        {posts.map((post) => (
                        <Grid item xs={12} sm= {6}>
                            <Post setCurrentId={setCurrentId} key={post._id} post={post}/> 
                        </Grid>  
                    ))}  
                    </Grid>                               
                </Grid>
            </Grid>
        </Container>
    );
}

export default Admin;