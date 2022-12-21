const User = require('../models/User.model')

const updateUserController = (req, res, next) => {



    User.findByIdAndUpdate( req.params.userId, {
        profilePic: req.body.profilePic,
        drivingNow: req.body.drivingNow,
        drivingNowImg: req.body.drivingNowImg,
        prevCar: req.body.prevCar,
        prevCarImg: req.body.prevCarImg,
        status: req.body.status,
        dreamCar: req.body.dreamCar,
        dreamCarImg: req.body.dreamCarImg
    })
    .then(response => {
        console.log('here is updated user', response)
        res.send(response)
    })
    .catch(err => console.log(err))
}


const userProfileGet = (req, res, next) => {
    User.findById(req.params.userId)
    
    .then(foundUser => { 
        console.log('foundUser is here', foundUser)
        res.send(foundUser)
    })
    .catch(err => res.send(err))
};

module.exports = {updateUserController, userProfileGet}