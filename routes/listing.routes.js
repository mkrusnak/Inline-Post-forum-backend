const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {addListingController} = require ('../controllers/listings.controllers')


router.post('/add', isAuthenticated, addListingController)




// router.post('/signup', signupController);

// router.post('/login', loginController)

// router.get('/verify', isAuthenticated, (req, res, next) => {
//     res.status(200).json(req.payload)
// })


module.exports = router;