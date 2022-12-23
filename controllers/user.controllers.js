const User = require("../models/User.model");

const updateUserController = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.userId,
    {
        city: req.body.city,
        usstate: req.body.usstate,
      admin: req.body.admin,
      profilePic: req.body.profilePic,
      drivingNow: req.body.drivingNow,
      drivingNowImg: req.body.drivingNowImg,
      prevCar: req.body.prevCar,
      prevCarImg: req.body.prevCarImg,
      status: req.body.status,
      dreamCar: req.body.dreamCar,
      dreamCarImg: req.body.dreamCarImg,
    },
    { new: true }
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

const userProfileGet = (req, res, next) => {
  User.findById(req.params.userId)

    .then((foundUser) => {
      res.send(foundUser);
    })
    .catch((err) => res.send(err));
};

module.exports = { updateUserController, userProfileGet };
