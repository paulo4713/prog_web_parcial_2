const express = require('express');
var app = express();

const hbs = require('express-handlebars');
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const fs = require('fs');
const download = require('download');

app.get('/', (req, res) => {
    res.send('hola');
});


app.listen(5500);