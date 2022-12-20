const { STATES } = require('mongoose')
const Comment = require('../models/Comment.model')
const Diy = require('../models/Diy.model')

const addCommentController = (req, res, next) => {
 
const postingId = req.body.reference;
// console.log('here is postingid', postingId)


let currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    Comment.create({
        profilePic: req.body.profilePic,
        text: req.body.text,
        author: req.body.author,
        reference: req.body.reference,
        createdAtTime:  currentDate.toLocaleString("en-US", options)
        
    })
    .then(commentCreated => {
        console.log(req.body.reference)
        console.log('created comment', commentCreated)
        
        Diy.findByIdAndUpdate( postingId, {
            $push: { comments: commentCreated._id}},
            {new: true}
        )
        .then(foundItem => console.log('HEREHERE', foundItem))
        .catch(err => console.log(err))
    } 
)
    .then(axiosResponse => {
        console.log('new comment added', axiosResponse)
        res.send(axiosResponse)
    })
    .catch(err => console.log(err))
};



module.exports = {addCommentController};