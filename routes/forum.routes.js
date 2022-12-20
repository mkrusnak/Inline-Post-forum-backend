const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {AddForumPost, getForumPosts, getSingleForumPost, editForumPost} = require('../controllers/forum.controllers')


router.post('/add', isAuthenticated, AddForumPost)

router.get('/', isAuthenticated, getForumPosts)

router.get('/:forumId', isAuthenticated, getSingleForumPost)

router.get('/edit/:forumId', isAuthenticated, editForumPost)

module.exports = router;