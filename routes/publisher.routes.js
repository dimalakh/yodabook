const express = require('express');
const router = express.Router();

const Publisher = require('../models/publisher.model');

router.get('/', (req, res) => {
    res.send('publisher');
});

module.exports = router;