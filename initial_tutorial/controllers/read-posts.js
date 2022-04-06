
const Post = require('../model/post');

module.exports.getAllPosts = async (req, reply) => {
    let posts = await Post.find({}).select('-_id -__v');
    console.log(posts);
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(posts);
}

module.exports.getPostBySlug = async (req, reply) => {
    const { slug } = req.params;
    let post = await Post.findOne({ slug: slug }).select('-_id -__v');
    // console.log(post);
    if (post) {
        // @update Post Views 
        await Post.findOneAndUpdate({ slug: slug }, { $inc : { 'views' : 1 } });
        reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(post);
    } else {
        reply.code(404).header('Content-Type', 'application/json; charset=utf-8').send({ 'msg': "Error ! Post Not Found !" });

    }
}