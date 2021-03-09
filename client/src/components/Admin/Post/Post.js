import React from "react";
import { Typography, Card, CardContent, CardActions, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deletePost } from "../../../actions/posts";

function Post({ post, setCurrentId }) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post._id));
    }

    return (
        <Card className={classes.card}>
            <Typography className={classes.title} variant="h4"> {post.title}</Typography>
            <CardContent>
                <Typography className={classes.details} > {post.intro}</Typography>
                <Typography className={classes.details} > Location: {post.location}</Typography>
                <Typography className={classes.details} > Duration: {post.duration}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() =>setCurrentId(post._id)}>
                    <EditIcon fontSize="small" />
                    Edit                    
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" />
                    Delete                    
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;