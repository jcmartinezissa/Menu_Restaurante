const {Schema, model} = require ('mongoose');
 
let Usuario = mongoose.model('usuarios');
let Menu = mongoose.model('menues');

const pedidosSchema = new Schema ({
    usuario: String,
    fecha: Date,
    menu : String,
    estado: String
});

module.exports = model('Pedidos', pedidosSchema);
