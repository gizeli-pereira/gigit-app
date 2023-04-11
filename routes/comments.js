const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /posts/:id/comments  - create comment for a post
router.post('/posts/:id/comments', ensureLoggedIn, commentsCrtl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCrtl.delete);

module.exports = router;