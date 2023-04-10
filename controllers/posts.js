const Post = require('../models/post');

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update
};


async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'All Posts', posts});
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { title: 'Post Details', post});
    console.log(req.params.id);
  }

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post', errorMsg: ''});
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    try {
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`);
      } catch (err) {
        console.log(err);
        res.render('posts/new', { errorMsg: err.message });
      }
}

async function deletePost(req, res) {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
}

async function edit(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/edit', { title: 'Edit Post', post});
}

async function update(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.redirect(`/posts/${post._id}`);
        
    } catch (err) {
        console.log(err);
        res.render('posts/edit', { title: 'Edit Post', post: req.body, errorMsg: err.message });
    }
}