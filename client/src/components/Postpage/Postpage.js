import React from "react";
import { withRouter, useParams } from "react-router-dom";
import { Container, Grid, Typography, CardMedia, IconButton} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Carousel from 'react-material-ui-carousel'

import useStyles from "./styles";
import { likePost } from "../../actions/posts";


function Postpage(props) {
    const classes = useStyles();
    const dispatch = useDispatch(); 

    const { id } = props.match.params; 
    const [post] = useSelector((state) => state.posts.filter((p) => p._id===id));

    return(
        <Container maxWidth="lg">
            {/* Intro section */}
            <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>                                        
                    <CardMedia className={classes.media} image={post.coverImage} title={post.title}/>                                      
                </Grid>
                <Grid item xs={12} sm={7}>
                    <div className={classes.introSection}>
                        <Typography className={classes.title} variant="h3">{post.title}</Typography>
                        <IconButton className={classes.overlay} onClick={() => dispatch(likePost(post._id))}>
                            <FavoriteIcon className={classes.likeButton} /> &nbsp; {post.likeCount}</IconButton>
                        <Typography className={classes.details} variant="body1">Post created on: {moment(post.postedAt).format('MMMM Do YYYY')}</Typography>
                        <Typography variant="body1" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                        <div className={classes.introDetails}>
                            <Typography className={classes.details} variant="h6">Location: {post.location}</Typography>                        
                            <Typography className={classes.details} variant="h6">Duration: {post.duration}</Typography> 
                        </div>                        
                    </div>                    
                </Grid>
            </Grid>
            {/* Main section */}
            <Grid container className={classes.postSection}>
                <Grid item xs={12}>
                    <div>
                        <Typography className={classes.heading} variant="h4">Description:</Typography>
                        <Typography className={classes.details} variant="body1">{post.description}</Typography>                         
                        <Carousel autoPlay="false"  animation="slide" interval="6000">
                            {post.descriptionImages.map((image, index) => (
                                <CardMedia className={classes.media} image={image} key={index} alt="hiking"/>
                            ))}
                        </Carousel>                        
                    </div>                    
                </Grid>
            </Grid>
        </Container>
    );
}

export default withRouter(Postpage);