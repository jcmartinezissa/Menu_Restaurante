const {Schema, model} = require ('mongoose');

const usuariosSchema = new Schema ({
    nombre: String,
    email: String,
    password : String,
    estado: String,
    rol: String
});

module.exports = model('Usuarios', usuariosSchema);


