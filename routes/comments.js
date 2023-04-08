const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');

//POST /posts/:id/comments  - create comment for a post
router.post('/posts/:id/comments', commentsCrtl.create);

router.delete('/comments/:id', commentsCrtl.delete);

module.exports = router;