const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /posts/:id/comments
router.post('/posts/:id/comments', ensureLoggedIn, commentsCrtl.create);

//DELETE /comments/:id
router.delete('/comments/:id', ensureLoggedIn, commentsCrtl.delete);

module.exports = router;