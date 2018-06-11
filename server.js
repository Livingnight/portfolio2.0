const express = require('express');
const bodyParser = require('body-parser');
const exphbs = requre('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 17000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlEncoded({extended: true}));

app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

const routes = require('controller/portfolioController');