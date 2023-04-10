const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /posts
router.get('/', postsCtrl.index);

// GET /posts/new
router.get('/new', ensureLoggedIn, postsCtrl.new);

//DELETE /posts/:id
router.delete('/:id', ensureLoggedIn, postsCtrl.delete);

//PUT /posts/:id
router.put('/:id', ensureLoggedIn, postsCtrl.update);

// POST /posts
router.post('/', ensureLoggedIn, postsCtrl.create);

//EDIT /posts/:id/edit
router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit);

// GET /posts/:id 
router.get('/:id', postsCtrl.show);


module.exports = router;