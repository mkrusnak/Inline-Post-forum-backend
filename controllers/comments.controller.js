const { STATES } = require("mongoose");
const Comment = require("../models/Comment.model");

const addCommentController = (PostingTypeModel) => (req, res, next) => {
  const postingId = req.body.reference;

  let currentDate = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  Comment.create({
    profilePic: req.body.profilePic,
    text: req.body.text,
    author: req.body.author,
    reference: req.body.reference,
    createdAtTime: currentDate.toLocaleString("en-US", options),
  })
    .then((commentCreated) => {
      PostingTypeModel.findByIdAndUpdate(
        postingId,
        {
          $push: { comments: commentCreated._id },
        },
        { new: true }
      )
        .then((foundItem) => console.log("HEREHERE", foundItem))
        .catch((err) => console.log(err));
    })
    .then((axiosResponse) => {
      res.send(axiosResponse);
    })
    .catch((err) => console.log(err));
};

module.exports = { addCommentController };
