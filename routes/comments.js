const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /posts/:id/comments  - create comment for a post
router.post('/posts/:id/comments', ensureLoggedIn, commentsCrtl.create);

// //EDIT /posts/:id/edit
// router.get('/comments/:id/edit', commentsCrtl.edit);

router.delete('/comments/:id', ensureLoggedIn, commentsCrtl.delete);

// // put update comment
// router.put('/comments/:id', commentsCrtl.update);

module.exports = router;