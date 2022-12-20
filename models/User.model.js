const {Schema, model} = require('mongoose');

const userSchema = new Schema({

    profilePic: {type: String,
    default: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg'},
    drivingNow: {type: String},
    drivingNowImg: {type: String},
    headerImg: {type: String},
    cars: [{type: String}],
    status: {type: String},
    dreamCar: {type: String},
    dreamCarImg: {type: String},



    username:{
     type: String,
     unique: true,
     required: true
    },
   email: {
    type: String,
    unique: true,
    required: true
   },
   password: {
    type: String,
    required: true
   },
   name: String
})

const User = model('User', userSchema)

module.exports = User;