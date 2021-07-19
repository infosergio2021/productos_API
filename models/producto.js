const { Schema, model} = require('mongoose');
//Definicion del modelo de la imagen
const ProductoSchema = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    precio:{ type: Number},
    cantidad:{ type: Number},
    fech_creacion: { type: Date, default: Date.now() }
});
//para utilizar la definicion necesitamos crear el modelo
module.exports = model('Product',ProductoSchema);