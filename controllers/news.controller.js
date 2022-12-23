const { STATES } = require("mongoose");
const News = require("../models/News.model");

const addNewsController = (req, res, next) => {
  let currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  News.create({
    title: req.body.title,
    text: req.body.text,
    image: req.body.image,
    author: req.body.author,
    link: req.body.link,
    createdAtTime: currentDate.toLocaleString("en-US", options),
  })
    .then((axiosResponse) => {
      res.send(axiosResponse);
    })
    .catch((err) => console.log(err));
};

const getNewsController = (req, res, next) => {
  News.find()
    .populate("author")
    .then((articles) => res.send(articles))
    .catch((err) => console.log(err));
};

module.exports = { addNewsController, getNewsController };
