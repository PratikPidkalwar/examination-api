const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const adminschema = new mongoose.Schema({
    name: {
        type: String, required: true, trim: true
    },
    email: {
        type: String, required: true, trim: true, unique: true, lowercase: true
    },
    password: {
        type: String, required: true, trim: true, min: 8, max: 15
    }

}, { timestamps: true })

module.exports = mongoose.model("admin", adminschema);