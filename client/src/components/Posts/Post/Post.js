import React from "react";
import { Card, CardActions, CardMedia, CardContent, Typography, IconButton, Button} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreIcon from '@material-ui/icons/More';
import moment from "moment";
import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../../../actions/posts";

import useStyles from "./styles";

function Post({post}) {
    const classes = useStyles();
    const dispatch = useDispatch(); 
    
    return (      
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.coverImage}
          title={post.title}
        />
        <Typography className={classes.overlay} variant="body2">
          Posted on: {moment(post.postedAt).format('MMMM Do YYYY')}
        </Typography>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.intro}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="add to favorites" onClick={() => dispatch(likePost(post._id))}>
            <FavoriteIcon className={classes.likeButton} />
            &nbsp; {post.likeCount}
          </IconButton>
          <Link className={classes.nolink} to={`/posts/${post._id}`} >
            <Button className={classes.readmore}>
              Read More &nbsp;<MoreIcon />
            </Button>
          </Link>            
        </CardActions>        
      </Card>        
    );
  }

  export default withRouter(Post);