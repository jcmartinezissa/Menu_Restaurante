const pedidosCtrl = {};

const Pedidos = require('../models/pedidos.js');

//consultar todos los pedidos
pedidosCtrl.getPedidos = async (req, res)=> {
    try {   
        const pedido = await Pedidos.find();            
        res.json({pedido});    
    } catch (error) {
        res.send('Error: '+error);
        console.log('Error al consultar los pedidos: '+error);          
    };    
};

//buscar pedido por id
pedidosCtrl.getPedido = async (req, res) => {
    let idP = req.params.idP;
     try {
        const pedido = await Pedidos.findOne({_id:idP});
        if (pedido == null) {
            res.send('No se encontro el pedido');
        }else
        {
            res.json({pedido});
        }                
     } catch (error) {         
        res.send('Error al realizar la busqueda: '+error);
     }    
};


//crear nuevo pedido
pedidosCtrl.createPedido = async (req, res) => {
    const {usuario, fecha, menu, cantidad, estado} = req.body;    
    const newPedido = new Pedidos ({
        usuario: usuario,
        fecha: Date(fecha),
        menu: menu,
        cantidad: cantidad,
        estado: estado});
    try {          
            await newPedido.save();
            res.json(newPedido);

    } catch (error) {
        res.send('Error al crear el Pedido'+error);  
    }
};

//modiifcar pedido
pedidosCtrl.updatePedido = async (req, res) => {
    const idP =  req.params.idP;
    const {usuario, fecha, menu, cantidad, estado} = req.body;   
    try {
      let pedido =  await Pedidos.findOneAndUpdate({_id: idP}, {usuario, fecha, menu, cantidad, estado}, {new: true});        
         if (pedido===null){
             res.send('no se encotro el pedido');
         } else
         {res.json(pedido);              }
      
    } catch (error) {         
       res.send('No se pudo actualizar: '+error);
    } 
};

//eliminar pedido
pedidosCtrl.deletePedido = async (req, res) => {
    const idP =  req.params.idP;
    try {
      let pedido =  await Pedidos.deleteOne({_id: idP});         
      res.json({mensaje: "usuario eliminado"});              
    } catch (error) {         
       res.send('No se pudo eliminar: '+error);
    };
};

module.exports = pedidosCtrl;
