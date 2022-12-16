const mongoose = require("mongoose");
const Diy = require('../models/Diy.model')
const User = require('../models/User.model')

mongoose
  .connect("mongodb://localhost:27017/test-seed")
  .then((x) => {
    console.log("Connected to database name:", x.connections[0].name);

    return User.create({
        username: "linssasdd2aa5",
        email: "linddssws22a@gmail.com",
        password: 'asdfasdf'
    })
  })
  .then((createdUser) => {
    console.log("My created user is", createdUser);

    return Diy.create({
        title: "Oil change",
        images: ["img1", "img2", "img3"],
        reqTools: "ratchet, drill, 10mm socket",
        owner: createdUser._id,
        time: 2,
        description: "pretty easy job",
        video: "dQw4w9WgXcQ",
        comments: ["639a40a0dd866fd8798273aa", "639a40cfdd866fd8798273ac"]
      });
  })
  .then((createdGallery) => {
    console.log("New Gallery was created", createdGallery);
   })
  .catch((err) => console.log("Error connecting to database:", err));

