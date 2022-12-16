const mongoose = require("mongoose");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");

mongoose
  .connect("mongodb://localhost:27017/test-seed")
  .then((x) => {
    console.log("Connected to database name:", x.connections[0].name);

    return User.create({
      username: "lirrna26",
      email: "linwarr@gmail.com",
      password: "asdfasdf",
    });
  })
  .then((createdUser) => {
    console.log("My created user is", createdUser);

    return Comment.create({
      body: "testing comments",
      sender: "639a40a0dd866fd8798273aa"
    });
  })
  .then((newComment) => {
    console.log("New comment created", newComment.createdAt);
  })
  .catch((err) => console.log("Error connecting to database:", err));
