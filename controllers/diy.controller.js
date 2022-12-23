const Diy = require("../models/Diy.model");

const addDiyController = (req, res, next) => {
  let currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getVideoId = (str) => {
    return str.split("=")[1];
  };

  Diy.create({
    profilePic: req.body.profilePic,
    title: req.body.title,
    reqTools: req.body.reqTools,
    time: req.body.time,
    description: req.body.description,
    video: getVideoId(req.body.video),
    author: req.body.author,
    createdAtTime: currentDate.toLocaleString("en-US", options),
  })
    .then((response) => res.send(response))
    .catch((err) => console.log(err));
};

const getDiyPosts = (req, res, next) => {
  Diy.find()
    .populate("author")
    .then((diyPosts) => res.send(diyPosts))
    .catch((err) => console.log(err));
};

const getSingleDiy = (req, res, next) => {
  Diy.findById(req.params.diyId)
    .populate({
      path: "comments",
      populate: {
        path: "author",
        model: "User",
      },
    })
    .populate("author")
    .then((diy) => {
      res.send(diy);
    })
    .catch((err) => console.log(err));
};

const deleteDiyPost = (req, res, next) => {
  Diy.findByIdAndDelete(req.params.diyId)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.log(err));
};

module.exports = { addDiyController, getDiyPosts, getSingleDiy, deleteDiyPost };
