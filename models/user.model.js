const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    books: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Book'
    }
});

module.exports = mongoose.model('User',UserSchema);