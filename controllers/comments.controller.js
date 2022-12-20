const { STATES } = require('mongoose')
const Comment = require('../models/Comment.model')

const addCommentController = (req, res, next) => {

    Comment.create({
        profilePic: req.body.profilePic,
        text: req.body.text,
        author: req.body.author,
        reference: req.body.reference,
        
    })
    .then(axiosResponse => {
        console.log('new comment added', axiosResponse)
        res.send(axiosResponse)
    })
    .catch(err => console.log(err))
};

module.exports = {addCommentController};