const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');

//POST /posts/:id/comments  - create comment for a post
router.post('/posts/:id/comments', commentsCrtl.create);


module.exports = router;