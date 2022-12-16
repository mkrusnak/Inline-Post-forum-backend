const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    imageUrl: {type: String, required: true},
    title: {type: String, required: true},
    owner: { type: Schema.Types.ObjectId, ref: "User" }
},
{ timestamps: true })

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

