const express = require('express');
const jwt = require('jsonwebtoken');
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

//Token validation
router.use((req, res, next) => {
    if (req.headers['token']) {
        console.log('ok');
        jwt.verify(req.headers['token'], 'CHANGE_THIS_STRING', (err, decode) => {
            if (err) {
                res.send(err);
            } else {
                next();
            }
        });
    } else {
        res.send('you dont have token');
    }
});

router.get('/book/:id', (req, res) => {
    Book.findOne({
        id: req.params.id
    }).exec((err, book) => {
        res.json(book);
    });
});

module.exports = router;