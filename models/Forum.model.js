const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    profilePic: {type: String},
    video: {type: String},
    image: {type: String},
    subject: {type: String, required: true},
    body: { type: String, required: true },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true }
);

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;


