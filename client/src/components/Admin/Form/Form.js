import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../../actions/posts";

function Form({ currentId, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();    

    const [postData, setPostData] = useState({
        title: "",
        intro: "",
        tags: "",
        coverImage: "",
        location: "",
        duration: "",
        description: "",
        descriptionImages: []
    });

    const handleUploadFiles = (files) => {
        let imageArray = [];
        files.forEach(element => {
            imageArray.push(element.base64);
        });
        
        setPostData({...postData, descriptionImages: imageArray});           
    }
    

    // If the edit button on a post was clicked, the prop currentId will have a value. If there is a currentId, populate the const post with the post with that id.
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    // If there is a selected post, populate the postData fields with the post data
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);
 

    // If there is a selected post, submit the form information to be updated in the database. If not, create a new post in the database.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }        
        clear();
    }

    // Clear the form fields after the submit.
    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: "",
            intro: "",
            tags: "",
            coverImage: "",
            location: "",
            duration: "",
            description: "",
            descriptionImages: []
        });
    }   


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.title} variant="h4">{currentId ? "Editing" :"Creating"} a Post</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth onChange={(e) => setPostData({...postData, title: e.target.value})} value={postData.title} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} value={postData.tags} />
                <TextField name="intro" variant="outlined" label="Intro" multiline fullWidth onChange={(e) => setPostData({...postData, intro: e.target.value})} value={postData.intro} />                
                <div className={classes.fileInput}>
                    <Typography variant="body2">Select cover image: </Typography>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, coverImage: base64})} />
                </div>
                <TextField name="location" variant="outlined" label="Location" fullWidth onChange={(e) => setPostData({...postData, location: e.target.value})} value={postData.location} />
                <TextField name="duration" variant="outlined" label="Duration" fullWidth onChange={(e) => setPostData({...postData, duration: e.target.value})} value={postData.duration} />
                <TextField name="description" variant="outlined" label="Description" multiline fullWidth onChange={(e) => setPostData({...postData, description: e.target.value})} value={postData.description} />
                <div className={classes.fileInput}>
                    <Typography variant="body2">Select description images: </Typography>
                    <FileBase multiple={true} onDone={handleUploadFiles} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;