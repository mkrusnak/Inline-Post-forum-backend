const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAtTime: {
      type: String,
    },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
