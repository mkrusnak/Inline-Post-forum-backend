const Forum = require("../models/Forum.model");

const AddForumPost = (req, res, next) => {
  Forum.create({
    subject: req.body.subject,
    body: req.body.body,
    author: req.payload._id,
    image: req.body.image,
    video: req.body.video,
  })
    .then((newForum) => {
      res.send(newForum);
      console.log("here is new Forum", newForum);
    })
    .catch((err) => console.log(err));
};


const getForumPosts = (req, res, next) => {
    Forum.find()
    .populate('author')
    .then(forumPosts => res.send(forumPosts))
    .catch(err => console.log(err))
}

const getSingleForumPost = (req, res, next) => {
    Forum.findById(req.params.forumId)
    .populate("author comments")
    .then(post => res.send(post))
    .catch(err => console.log(err))
}

const editForumPost = (req, res, next) => {
    Forum.findByIdAndUpdate(
        req.params.forumId,
        {
          subject: req.body.subject,
          body: req.body.body,
          image: req.body.image,
          video: req.body.video,
        },
        { new: true }
      )
      .then(response => res.send(response))
      .catch(err => console.log(err))
}


const deleteForumPost = (req, res, next) => {
    Forum.findByIdAndDelete(req.params.forumId)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}



module.exports = { AddForumPost, getForumPosts, getSingleForumPost, editForumPost, deleteForumPost };
