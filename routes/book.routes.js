const express = require('express');
const router = express.Router();

const Book = require('../models/book.model');

router.get('/', (req, res) => {
    Book.find({}).exec((err, books) => {
        console.log(books); 
        res.json(books);
    });
});

router.post('/book', (req, res) => {
    Book.create(req.body, (err, book) => {
        res.send(book);
    });
});

router.get('/book/:id', (req, res) => {
    Book.findOne({
        id: req.params.id
    }).exec((err, book) => {
        res.json(book);
    });
});

module.exports = router;