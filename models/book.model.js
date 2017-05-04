const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: true
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