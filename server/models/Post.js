const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    writer: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
    postId: {
      type: String,
    },
    job: {
      type: String,
    },
    title: {
      type: String,
    },
    contents: {
      type: String
    },
    name: {
      type: String
    },
    views: {
      type: Number,
      default: 0
    },
}, { timestamps: true })


const Post = mongoose.model('Post', postSchema);

module.exports = { Post }