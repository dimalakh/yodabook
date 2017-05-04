const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
});

module.exports = mongoose.model('Book', BookSchema);