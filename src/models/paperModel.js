const mongoose = require('mongoose');
const { options } = require('../routes/route');
const objectId = mongoose.Schema.Types.ObjectId;

const paperschema = new mongoose.Schema({

    document: {
        type: String,
        trim: true
    },
    question: {
        type: String, required: true, trim: true
    },
    option: {
        option1: {
            type: String, required: true, trim: true
        },
        option2: {
            type: String, required: true, trim: true
        },
        option3: {
            type: String, required: true, trim: true
        },
        option4: {
            type: String, required: true, trim: true
        },
    },
    answer: {
        type: String, trim: true, required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("paper", paperschema);