const Post = require('../models/post');

module.exports = {
    index,
    show,
    new: newPost,
    create
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
    try {
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`);
      } catch (err) {
        console.log(err);
        res.render('posts/new', { errorMsg: err.message });
      }
}