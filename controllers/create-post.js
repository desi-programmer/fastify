// @create Post Route
const Post = require('../model/post');

module.exports = async (req, reply) => {
    // get data from body
    const { slug, title, content } = req.body;
    let isPost = await Post.findOne({ slug: slug });
    if (isPost) {
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ msg: "Slug Already Exists !" });
    } else {
        let post = Post({
            slug,
            title,
            content
        });
        await post.save();
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ msg: "Post Created !" });
    }
}