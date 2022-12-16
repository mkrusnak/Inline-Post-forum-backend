const mongoose = require("mongoose");
const Listing = require("../models/Listing.model");
const User = require("../models/User.model");

  mongoose
  .connect("mongodb://localhost:27017/test-seed")
  .then((x) => {
    console.log("Connected to database name:", x.connections[0].name);

    return User.create({
        username: "lina25",
        email: "lina@gmail.com",
        password: 'asdfasdf'
    })
  })
  .then((createdUser) => {
    console.log("My created project is", createdUser);
    
    return Listing.create({
        makeModel: "bmw x5",
        odometr: 153245,
        year: 2011,
        description: "very good car",
        price: 12000,
        imageUrl: ["abcdefg", "asfafs", "asfasf", "safjnfa"],
        knownFlaws: "Eveyrything works, nothing is broken",
        tradeOk: true,
        owner: createdUser._id
      });
  })
  .then((createdUser) => {
    console.log("New task created", createdUser);
   })
  .catch((err) => console.log("Error connecting to database:", err));

