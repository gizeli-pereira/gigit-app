const express = require('express');
const router = express.Router();
const commentsCrtl = require('../controllers/comments');

//POST /posts/:id/comments  - create comment for a post
router.post('/posts/:id/comments', commentsCrtl.create);

//EDIT /posts/:id/editcom
// router.get('/comments/:id/editcom', commentsCrtl.edit);

router.delete('/comments/:id', commentsCrtl.delete);

// put update comment
// router.put('/comments/:id', commentsCtrl.update);

module.exports = router;