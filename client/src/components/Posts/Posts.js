import React from "react";
import { Container, Grid } from "@material-ui/core";

import Post from "../Posts/Post/Post";
import useStyles from "./styles";

function Posts({setCurrentId, posts}) {
    const classes = useStyles();
        
    return (
        <Container maxWidth="lg">    
            <Grid className={classes.mainContainer} container spacing={7}> 
            {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Post setCurrentId={setCurrentId} key={post._id} post={post}/> 
                </Grid>  
            ))}                       
                                              
            </Grid>
        </Container>
    );
}

export default Posts;
