const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    slug : {
        type : String,
        required : true,
        unique : true,
    },
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    views : {
        type : Number,
        default : 0,
    }
});

let Post = mongoose.model('posts', postSchema);

module.exports = Post;