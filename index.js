const express = require('express');
var app = express();

const hbs = require('express-handlebars');
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const fs = require('fs');
const download = require('download');

app.get('/', (req, res) => {
    res.render('pagina_a');
});

app.get('/pagina_b', (req, res) => {
    res.render('pagina_b');
});

app.get('/pagina_c', (req, res) => {
    res.render('pagina_c');
});

app.get('/visita/:visita_a', (req, res) => {
   var visitasEnA;
   var visitasEnB;
   var visitasEnC;

   var data = "Página A:" + visitasEnA+req.query.visita_a + "visitas\n"+"Página B:" + visitasEnB+req.query.visita_b + "visitas\n"+"Página C:" + visitasEnC+req.query.visita_c + "visitas\n";

    fs.writeFile('/visitas.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});


app.listen(5500);