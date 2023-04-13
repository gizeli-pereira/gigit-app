const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', postsCtrl.index);

router.get('/new', ensureLoggedIn, postsCtrl.new);

router.delete('/:id', ensureLoggedIn, postsCtrl.delete);

router.put('/:id', ensureLoggedIn, postsCtrl.update);

router.post('/', ensureLoggedIn, postsCtrl.create);

router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit);

router.get('/:id', postsCtrl.show);

router.post('/:id/like', ensureLoggedIn, postsCtrl.like);

router.post('/:id/dislike', ensureLoggedIn, postsCtrl.dislike);


module.exports = router;