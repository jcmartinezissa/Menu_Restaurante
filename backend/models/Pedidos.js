const {Schema, model} = require ('mongoose');
 
let Usuario = mongoose.model('usuarios');
let Menu = mongoose.model('menues');

const pedidosSchema = new Schema ({
    usuario: {
        type: Schema.ObjectId, 
        ref: "Usuario"},
    fecha: String,
    menu : {
        type: Schema.ObjectId,
        ref: 'Menu'},
    estado: String
});

module.exports = model('Pedidos', pedidosSchema);
