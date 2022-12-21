const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {updateUserController, userProfileGet} = require('../controllers/user.controllers')

router.put('/settings/:userId', isAuthenticated, updateUserController)

router.get('/profile/:userId', isAuthenticated, userProfileGet)

module.exports = router;