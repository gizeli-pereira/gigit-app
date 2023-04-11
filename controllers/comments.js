const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment
    // update
};

async function create(req, res) {
    const post = await Post.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    post.comments.push(req.body);
    try {
        await post.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/posts/${post._id}`);
}

async function deleteComment(req, res) {
    const post = await Post.findOne({'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!post) return res.redirect('/posts');
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`);
  }

// async function update(req, res) {
//     const post = await Post.findOne({'comments._id': req.params.id });
//     if (!post) return res.redirect('/posts');
//     const comment = post.comments.id(req.params.id);
//     if (!comment) return res.redirect(`/posts/${post._id}`);
//     comment.text = req.body.text;
//     await post.save();
//     res.redirect(`/posts/${post._id}`);
// }
