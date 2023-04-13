const Post = require('../models/post');

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    update,
    like,
    dislike
};


async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', {title: 'Take a look at the posts!', posts});
}

async function show(req, res) {
    const post = await Post.findById(req.params.id).populate('comments');
    //show the amount of comments of a post
    const commentsCount = post.comments.length;
    //render the post, number of commnets,likes and dislikes in the show page using variables
    res.render('posts/show', { title: '', post, commentsCount, likesCount: post.likes, dislikesCount: post.dislikes});
    console.log(req.params.id);
  }

function newPost(req, res) {
    res.render('posts/new', {title: 'Ask for help, share your thoughts or whatever you want!', errorMsg: ''});
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
        res.render('posts/new', { title: 'Ask for help, share your thoughts or whatever you want!', errorMsg: '' });
      }
}

async function deletePost(req, res) {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
}

async function edit(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/edit', { title: 'Go ahead and fix it!', post});
}

async function update(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, { content: req.body.content }, { new: true });
        res.redirect(`/posts/${post._id}`);
    } catch (err) {
        console.log(err);
        const post = await Post.findById(req.params.id);
        res.render('posts/edit', { title: '', post, errorMsg: err.message });
    }
}

async function like(req, res) {
    const post = await Post.findById(req.params.id);
    //check if user already liked the post
    if (post.likedBy.includes(req.user._id)) {
         return res.status(400).send('You can only like once, my friend!');
    }
    // Add user to likedBy array in the model and increment likes count
    post.likedBy.push(req.user._id);
    post.likes++;
    await post.save();
    res.redirect(`/posts/${post._id}`);
   
  }

  async function dislike(req, res) {
    const post = await Post.findById(req.params.id);
    if (post.dislikedBy.includes(req.user._id)) {
        return res.status(400).send('You can only dislike once, my friend!');
    }
    post.dislikedBy.push(req.user._id);
    post.dislikes++;
    await post.save();
    res.redirect(`/posts/${post._id}`);
  }