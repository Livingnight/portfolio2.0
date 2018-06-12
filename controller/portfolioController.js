const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

module.exports = router;