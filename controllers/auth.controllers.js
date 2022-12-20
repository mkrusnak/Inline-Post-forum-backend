const bcryptjs = require("bcryptjs");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const signupController = (req, res, next) => {
  const { email, password, username } = req.body;

  let currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };



  if (!email || !password || !username) {
    return res.status(400).json({
      error: {
        message: "Missing email, username or password",
      },
    });
  }

  bcryptjs
    .hash(password, 10)
    .then((hashedPassword) => {
      return User.create({
        username,
        email,
        password: hashedPassword,
        createdAtTime:  currentDate.toLocaleString("en-US", options)
      });
    })
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch((err) => res.send(err));
};

const loginController = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      error: {
        message: "missing email or password",
      },
    });
  }

  let myUser;

  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        return Promise.reject("Email or password is wrong");
      }
      myUser = foundUser;
      return bcryptjs.compare(password, foundUser.password);
    })
    .then((isValidPassword) => {
      if (!isValidPassword) {
        return Promise.reject("Invalid email or password");
      }
      const payload = {
        _id: myUser._id,
        username: myUser.username,
        email: myUser.email,
        profilePic: myUser.profilePic
      };

      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "6h",
      });

      res.json({
        authToken: authToken,
      });
    })
    .catch((err) => res.send(err));
};

module.exports = { signupController, loginController };
