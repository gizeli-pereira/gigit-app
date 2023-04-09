const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment,
    // edit
};

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    try {
        await post.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/posts/${post._id}`);
}

async function deleteComment(req, res) {
    const post = await Post.findOne({'comments._id': req.params.id });
    if (!post) return res.redirect('/posts');
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`);
  }

//   async function edit(req, res) {
//     const post = await Post.findOne({'comments._id': req.params.id });
//     if (!post) return res.redirect('/posts');
//     const comment = post.comments.id(req.params.id);
//     if (!comment) return res.redirect(`/posts/${post._id}`);
//     res.render('posts/editcom', { title: 'Edit Comment', post, comment });
// }