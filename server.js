const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = 'mongodb://localhost/booksdb';

const userRoutes = require('./routes/user.routes');
const bookRoutes = require('./routes/book.routes');
const publisherRoutes = require('./routes/publisher.routes');

const app = express();
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('App listen on port 3000');
});