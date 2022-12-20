const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    subject: {type: String, required: true},
    body: {type: String, required: true},
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAtTime: {
        type: String
      }

},
{ timestamps: true })

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

