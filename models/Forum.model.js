const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    video: {type: String},
    image: [{type: String}],
    subject: {type: String, required: true},
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [{type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"}]
  },
  { timestamps: true }
);

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;


