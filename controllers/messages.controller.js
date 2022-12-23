const Message = require("../models/Message.model");

const sendMessagePostController = (req, res, next) => {
  let currentDate = new Date();
  const options = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  Message.create({
    subject: req.body.subject,
    body: req.body.body,
    sender: req.payload._id,
    recipient: req.body.recipient,
    createdAtTime: currentDate.toLocaleString("en-US", options),
  })
    .then((newMessage) => {
      res.send(newMessage);
    })
    .catch((err) => console.log(err));
};

const getMessagesController = (req, res, next) => {
  Message.find({
    recipient: req.params.userId,
  })
    .populate("sender")
    .then((foundMessages) => res.send(foundMessages))
    .catch((err) => console.log(err));
};

module.exports = { sendMessagePostController, getMessagesController };
