const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');

// GET /posts
router.get('/', postsCtrl.index);

// GET /posts/new
router.get('/new', postsCtrl.new);

// GET /posts/:id 
router.get('/:id', postsCtrl.show);

// POST /posts
router.post('/', postsCtrl.create);

//DELETE /posts/:id
router.delete('/:id', postsCtrl.delete);



module.exports = router;