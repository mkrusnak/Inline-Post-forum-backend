const mongoose = require("mongoose");
const Message = require('../models/Message.model')
const User = require('../models/User.model')

mongoose
  .connect("mongodb://localhost:27017/test-seed")
  .then((x) => {
    console.log("Connected to database name:", x.connections[0].name);

    return User.create({
        username: "lina26",
        email: "linwa@gmail.com",
        password: 'asdfasdf'
    })
  })
  .then((createdUser) => {
    console.log("My created user is", createdUser);

    return Message.create({
       subject: "Test message",
       body: "testing out messaging between users",
       sender: createdUser._id,
       recipient: "6399f98071e2bb0bffcf0b74"
      });
  })
  .then((createdMessage) => {
    console.log("New message created", createdMessage);
   })
  .catch((err) => console.log("Error connecting to database:", err));

