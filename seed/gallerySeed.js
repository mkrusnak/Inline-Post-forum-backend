const mongoose = require("mongoose");
const Gallery = require('../models/Gallery.model')
const User = require('../models/User.model')

mongoose
  .connect("mongodb://localhost:27017/test-seed")
  .then((x) => {
    console.log("Connected to database name:", x.connections[0].name);

    return User.create({
        username: "lina2aa5",
        email: "linw22a@gmail.com",
        password: 'asdfasdf'
    })
  })
  .then((createdUser) => {
    console.log("My created user is", createdUser);

    return Gallery.create({
        imageUrl: "somethinghere",
        title: "this image is fire",
        owner: createdUser._id
      });
  })
  .then((createdGallery) => {
    console.log("New Gallery was created", createdGallery);
   })
  .catch((err) => console.log("Error connecting to database:", err));

