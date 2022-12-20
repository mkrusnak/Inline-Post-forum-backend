const express = require('express')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const router = express.Router()
const {addListingController, updateListingController, deleteListingController,
     getListingsController, listingIdGet} = require ('../controllers/listings.controllers')

router.get('/', isAuthenticated, getListingsController)

router.get('/:listingId', isAuthenticated, listingIdGet)

router.post('/add', isAuthenticated, addListingController)

router.put('/edit/:listingId', isAuthenticated, updateListingController)

router.delete('/delete/:listingId', isAuthenticated, deleteListingController)

module.exports = router;