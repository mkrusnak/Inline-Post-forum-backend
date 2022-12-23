const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diySchema = new Schema(
  {
    profilePic: { type: String },
    title: { type: String, required: true },
    imagesUrl: { type: String},
    reqTools: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    time: { type: Number, required: true },
    description: { type: String, required: true },
    video: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    createdAtTime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Diy = mongoose.model("Diy", diySchema);

module.exports = Diy;
