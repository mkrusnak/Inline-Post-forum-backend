const Diy = require('../models/Diy.model')

const addDiyController = (req, res, next) => {

    Diy.create({
        profilePic: req.body.profilePic,
        title: req.body.title,
        reqTools: req.body.reqTools,
        time: req.body.time,
        description: req.body.description,
        video: req.body.video,
        author: req.body.author
    })
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

module.exports = {addDiyController}