const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create
};

async function create(req, res) {
    try {
        await Post.create(req.body);
        res.redirect('/posts');
      } catch (err) {
        console.log(err);
        res.render('posts/new', { title: 'Add Post', errorMsg: err.message });
      }
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'All Posts', posts});
}

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post', errorMsg: ''});
}