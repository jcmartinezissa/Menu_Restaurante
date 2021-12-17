autoIncrement = require('mongoose-auto-increment');

const connection = require('../database');

autoIncrement.initialize(connection);

const {Schema, model} = require ('mongoose');

const menusSchema = new Schema ({
    idmenu: {
        type: Number,
        unique: true,
        ref: 'idM'},
    nombre: String,
    imagen: String,
    estado: String,
    precio : Number,
    detalle: String,
    categoria: String
});

menusSchema.plugin(autoIncrement.plugin, 'idM');

module.exports = model('Menus', menusSchema);
