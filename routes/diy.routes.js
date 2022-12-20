const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {addDiyController} = require('../controllers/diy.controller')


router.post('/add', isAuthenticated, addDiyController)



module.exports = router;