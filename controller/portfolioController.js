const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('contact', (req, res) => {
    res.render('contact');
});

router.get('portfolio', (req, res) => {
    res.render('portfolio');
});