const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = 'mongodb://localhost/booksdb';

const Book = require('./models/book.model');
const User = require('./models/user.model');

const app = express();
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/books', (req, res) => {
    Book.find({}).exec((err, books) => {
        console.log(books); 
        res.json(books);
    });
});

app.post('/book', (req, res) => {
    Book.create(req.body, (err, book) => {
        res.send(book);
    });
});

app.get('/book/:id', (req, res) => {
    Book.findOne({
        id: req.params.id
    }).exec((err, book) => {
        res.json(book);
    });
});

app.listen(3000, () => {
    console.log('App listen on port 3000');
});