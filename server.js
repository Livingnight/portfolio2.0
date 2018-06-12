const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controller/portfolioController.js');


const PORT = process.env.PORT || 17000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(routes)
app.listen(PORT, () =>{
    console.log(`server listening on PORT: ${PORT}`);
});