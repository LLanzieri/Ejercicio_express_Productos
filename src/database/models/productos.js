const mongoose = require('mongoose');
let productosSchema = new mongoose.Schema({
    categoria: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    marca: { type: String, required: true },
    imagen: { type: String, required: true }
});

module.exports = mongoose.model('producto', productosSchema);