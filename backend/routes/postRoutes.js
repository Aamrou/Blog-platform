const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');
const verifyToken = require('../middleware/auth');
const router = express.Router();

router.post('/', verifyToken, createPost);
router.get('/', getPosts);

module.exports = router;