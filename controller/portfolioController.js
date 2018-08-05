const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.render('portfolio');
});

router.get('/resume', (req, res) => {
    res.render('resume');
})

module.exports = router;