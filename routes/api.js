var express = require('express');
var router = express.router();

var Flight = require('../models/flight');

Flight.methods(['get', 'put', 'post', 'delete']);
Flight.register(router, '/flight');

module.exports = router;