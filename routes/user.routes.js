const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.post('/login', (req, res) => {
    User.findOne({ 
        username: req.body.username,
        password: req.body.password
    }).exec((err, user) => {
        if(user === null) {
            res.send('user not found or password is incorrect');
        } else if(err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
});

router.post('/signup', (req, res) => {
    User.create(req.body, (err, user) => {
        res.send('successful registration');
    });
});

module.exports = router;