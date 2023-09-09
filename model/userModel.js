const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
      
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    token:{
        type: String,
        default: ""
    }
}, { timeStamp: true })

module.exports = mongoose.model('user', userSchema)