const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const User = new Schema({
    email: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true 
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)