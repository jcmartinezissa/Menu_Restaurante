const {Schema, model} = require ('mongoose');

const menusSchema = new Schema ({
    nombre: String,
    imagen: String,
    estado: String,
    precio : Number,
    detalle: String,
    categoria: String
});


module.exports = model('Menus', menusSchema);
