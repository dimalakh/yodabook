const express = require('express');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const router = express.Router();


const User = require('../models/user.model');

router.post('/login', (req, res) => {
    User.findOne({ 
        username: req.body.username
    }).exec((err, user) => {
        if(user === null) {
            res.send('user not found');
        } else if(passwordHash.verify(req.body.password, user.password)) {
            const token = jwt.sign(user, 'CHANGE_THIS_STRING');
            res.json({
                'token': token
            });
        } else {
            res.send('incorrect password');
        }
    });
});

router.post('/signup', (req, res) => {
    const user = new User({ 
        username: req.body.username,
        password: passwordHash.generate(req.body.password)
     });

     user.save((err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.send(user);
        }
     });
    // User.create(req.body, (err, user) => {
    //     if(err) {
    //         res.send(err);
    //     } else {
    //         res.send('successful registration');
    //     }
    // });
});

module.exports = router;