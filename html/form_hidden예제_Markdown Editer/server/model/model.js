const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    summary : String,
    contents : String, 
    tag : {
        type: Array,
        required:false
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
})

const Memodb = mongoose.model('memodb', schema);

module.exports = Memodb;