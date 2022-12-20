const Diy = require('../models/Diy.model')

const addDiyController = (req, res, next) => {

    let currentDate = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };



    Diy.create({
        profilePic: req.body.profilePic,
        title: req.body.title,
        reqTools: req.body.reqTools,
        time: req.body.time,
        description: req.body.description,
        video: req.body.video,
        author: req.body.author,
        imagesUrl: req.body.imagesUrl,
        createdAtTime:  currentDate.toLocaleString("en-US", options)
    })
    .then(response => res.send(response))
    .catch(err => console.log(err))
}

const getDiyPosts = (req, res, next) => {
    Diy.find()
    .populate('author')
    .then(diyPosts => res.send(diyPosts))
    .catch(err => console.log(err))
}

const getSingleDiy = (req, res, next) => {
    Diy.findById(req.params.diyId)
    .populate( {
        path: 'comments',
        populate: {
            path: 'author', 
            model: 'User'
        }
    })
    .populate("author")
    .then(diy => {
        res.send(diy)
        console.log('HERE IS COMMENTS', diy)
    })
    .catch(err => console.log(err))
}


module.exports = {addDiyController, getDiyPosts, getSingleDiy}