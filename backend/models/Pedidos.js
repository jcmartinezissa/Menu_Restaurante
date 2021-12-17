const {Schema, model} = require ('mongoose');
ObjectId = Schema.ObjectId;

const pedidosSchema = new Schema ({
    usuario: ObjectId,
    fecha: Date,
    menu : ObjectId,
    cantidad: Number,
    estado: String
});

module.exports = model('Pedidos', pedidosSchema);
