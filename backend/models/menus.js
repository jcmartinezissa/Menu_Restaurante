const {Schema, model} = require ('mongoose');

const menusSchema = new Schema ({
    nombre: String,
    estado: String,
    precio : Number,
    detalle: String,
    Categoria: String
});

module.exports = model('Menus', menusSchema);
