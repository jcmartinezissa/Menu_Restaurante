const {Schema, model} = require ('mongoose');

const usuariosSchema = new Schema ({
    nombre: String,
    email: String,
    password : String,
    estado: Number,
    rol: Number
});

module.exports = model('Usuarios', usuariosSchema);


