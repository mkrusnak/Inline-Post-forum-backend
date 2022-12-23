const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  city: { type: String },
  usstate: { type: String },
  profilePic: {
    type: String,
    default: "https://i.insider.com/55ae93e6eab8ea890522f6fd?width=700",
  },
  drivingNow: { type: String },
  drivingNowImg: { type: String },
  headerImg: { type: String },
  prevCar: { type: String },
  prevCarImg: { type: String },
  status: { type: String, dafault: "I do it for the family.." },
  dreamCar: { type: String },
  dreamCarImg: { type: String },
  createdAtTime: {
    type: String,
  },

  username: {
    type: String,
    unique: true,
    required: true,
  },
  admin: { type: Boolean, default: false },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
});

const User = model("User", userSchema);

module.exports = User;
