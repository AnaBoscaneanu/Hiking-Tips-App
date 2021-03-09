import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    intro: String,
    location: String,
    duration: String,
    description: String,
    tags: [String],
    likeCount: {
        type: Number, 
        default: 0
    },
    postedAt: {
        type: Date,
        default: new Date
    },
    coverImage: String,
    descriptionImages: [String]
})

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;