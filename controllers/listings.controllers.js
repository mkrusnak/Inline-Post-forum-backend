const Listing = require("../models/Listing.model");

const addListingController = (req, res, next) => {

    let currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };





    console.log(req.body)
  const {
    makeModel,
    odometr,
    year,
    description,
    price,
    imagesUrl,
    knownFlaws,
    tradeOk,
  } = req.body;

  if (
    (!makeModel,
    !odometr,
    !year,
    !description,
    !price,
    !imagesUrl,
    !tradeOk,
    !knownFlaws)
  ) {
    return res.status(400).json({
      error: {
        message: "Can't have empty fields",
      },
    });
  }

  Listing.create({
    owner: req.payload._id,
    makeModel,
    odometr,
    description,
    year,
    price,
    imagesUrl,
    knownFlaws,
    tradeOk,
    createdAtTime:  currentDate.toLocaleString("en-US", options)
  })
    .then((newListing) => {
      res.send(newListing)
    })
    .catch((err) => console.log(err));
};

const updateListingController = (req, res, next) => {
  Listing.findByIdAndUpdate(
    req.params.listingId,
    {
      title: req.body.title,
      description: req.body.description,
      odometr: req.body.odometr,
      price: req.body.price,
    },
    { new: true }
  )
    .then((updatedListing) =>
      res.send(updatedListing)
    )
    .catch((err) => console.log(err));
};

const deleteListingController = (req, res, next) => {
  Listing.findByIdAndDelete(req.params.listingId)
    .then((deletedListing) =>
      res.send(deletedListing)
    )
    .catch((err) => console.log(err));
};

 const getListingsController = (req, res, next) => {
  Listing.find()
    .populate('owner')
    .then((foudListings) => {
     res.send(foudListings);
    })
    .catch((err) => console.log(err));
};

const listingIdGet = (req, res, next) => {
    Listing.findById(req.params.listingId)
    .populate('owner')
    .then(foundListing => { 
        console.log('foundListing is here', foundListing)
        res.send(foundListing)
    })
    .catch(err => res.send(err))
};

module.exports = {
  addListingController,
  updateListingController,
  deleteListingController,
  listingIdGet,
  getListingsController
};
