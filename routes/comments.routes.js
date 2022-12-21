const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {addCommentController} = require('../controllers/comments.controller')

const Diy = require('../models/Diy.model')
const Forum = require('../models/Forum.model')


router.post('/add/forum', isAuthenticated, addCommentController(Forum))

router.post('/add/diy', isAuthenticated, addCommentController(Diy))




module.exports = router;