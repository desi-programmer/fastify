// @Delete Post Route
const Post = require('../model/post');

module.exports = async (req, reply) => {

    const { slug } = req.body;

    await Post.findOneAndDelete({ slug: slug });

    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ msg : 'Delete Post' });
}