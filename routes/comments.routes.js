const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {addCommentController} = require('../controllers/comments.controller')


router.post('/add', isAuthenticated, addCommentController)



module.exports = router;