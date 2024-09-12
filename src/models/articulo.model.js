const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticuloModel = new Schema({
    nombre: String,
    contenido: [
        [String, String]
    ],
    titulo: String
});

const Model = mongoose.model('articulos', ArticuloModel);

module.exports = Model;