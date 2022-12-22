const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: { type: String },

    makeModel: { type: String, required: true },

    odometr: { type: Number, required: true },

    year: { type: Number, required: true },

    description: { type: String, required: true },

    price: { type: Number, required: true },

    imagesUrl: [{ type: String, required: true }],

    owner: { type: Schema.Types.ObjectId, ref: "User" },

    knownFlaws: { type: String },

    tradeOk: { type: Boolean },
    createdAtTime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
