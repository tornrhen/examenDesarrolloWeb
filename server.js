var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.use('/api', require('./routes/api'));

// Servidor
app.listen(3000);
console.log('API esta corriendo el puerto 3000!');

app.get('/', function (req, res) {
  res.status(200).send('Respuesta a GET!');
});

app.post('/', function (req, res) {
  res.send('Respuesta a POST');
});

app.put('/', function (req, res) {
  res.send('Respuesta a PUT');
});

app.delete('/', function (req, res) {
  res.send('Respuesta a DELETE');
});

app.get('/about', function(req,res) {
  res.send('Respuestas a ABOUT - GET');
});

//////////////
app.route('/Flights')
  .get(function(req, res) {
    res.send('Consultar Todos los Vuelos');
  })
  .get(function(req, res) {
    res.send('Consultar Vuelo por ID');
  })
  .get(function(req, res) {
    res.send('Consultar Vuelos X Fecha');
  })
  .get(function(req, res) {
    res.send('Consultar Vuelos X Fechas de Salida');
  })
  .get(function(req, res) {
    res.send('Consultar Vuelos X Fechas de Llegada');
  })
  .post(function(req, res) {
    res.send('Agregar un nuevo Vuelo');
  })
  .put(function(req, res) {
    res.send('Modificar Vuelo');
  })
  .delete(function(req, res) {
    res.send('Eliminar Vuelo');
  });
