const express = require('express');
const mongoose = require('mongoose');

const db = 'mongodb://localhost/booksdb';

const app = express();
mongoose.connect(db);

app.get('/', (req, res) => {
    res.send('Hola');
});

app.listen(3000, () => {
    console.log('App listen on port 3000');
});