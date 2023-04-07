const Post = require('../models/post');

module.exports = {
    index,
    new: newPost
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'All Posts', posts});
}

function newPost(req, res) {
    res.render('posts/new', {title: 'Add Post', errorMsg: ''});
}