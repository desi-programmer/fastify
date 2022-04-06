// @Update Post Route

const Post = require("../model/post");

module.exports = async (req, reply) => {

    const { slug, title, content } = req.body;


    // update title and content
    await Post.findOneAndUpdate({ slug: slug }, { title: title, content: content });

    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ msg: 'Updated Post' });
}