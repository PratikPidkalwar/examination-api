const mongoose = require('mongoose');
const { options } = require('../routes/route');
const objectId = mongoose.Schema.Types.ObjectId;

const paperschema = new mongoose.Schema({

    document: {
        type: String,
        trim: true
    },
    questions: {
        type: String, required: true, trim: true
    },
    options1: {
        type: String, required: true, trim: true
    },
    options2: {
        type: String, required: true, trim: true
    },
    options3: {
        type: String, required: true, trim: true
    },
    options4: {
        type: String, required: true, trim: true
    },
    answer: {
        type: String, trim: true, required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("paper", paperschema);