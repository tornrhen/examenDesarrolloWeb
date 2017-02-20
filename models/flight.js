var restful = require('node-restful');
var mongoose = restful.mongoose;

var flightSchema = new mongoose.Schema({
    _id: Number,
    Aerolinea: String,
    Ciudad_Origen: String,
    Ciudad_Destino: String,
    Fecha_Hora_Salida: Number,
    Fecha_Hora_Llegada: Number,
});

module.exports = restful.model('Flights', flightSchema);