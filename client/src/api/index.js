import axios from "axios";

// const url = "http://localhost:5000/posts"; //development 

const url = "https://hikingtips.herokuapp.com/posts"; // production: server deployed on heroku

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);