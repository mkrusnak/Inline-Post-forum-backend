const Listing = require('../models/Listing.model')

const addListingController = () => {

    const { makeModel, odometr, year,
    description, price, imageUrl,
knownFlaws, tradeOk} = req.body

if ( !makeModel, !odometr, !year,
    !description, !price, !imageUrl, !tradeOk,
!knownFlaws) {
return res.status(400).json({
    error: {
        message: "Can't have empty fields"
    }
})
}

Listing.create({
    makeModel, odometr,
    description, year, 
    price, imageUrl,
     knownFlaws, tradeOk
})
.then(newListing => {
    console.log('here is new listing', newListing)
})
.catch(err => console.log(err))
}


module.exports = {addListingController}