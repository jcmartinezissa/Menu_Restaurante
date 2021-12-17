const {Router} = require('express');
const cors = require('cors'); 
const router = Router();
const {getPedidos, getPedido, createPedido, updatePedido, deletePedido} = require('../controllers/pedidosCtrl');

router.route('/');
router.get('/', getPedidos); //todos los Pedidos
router.get('/pedido/:idP', getPedido);  //buscar un pedido por campo, valor color1=red&color2=blue
router.post('/nuevo', createPedido); // crear un Pedido
router.put('/actualizar/:idP', updatePedido); // modificar Pedido
router.delete('/eliminar/:idP', deletePedido); // eliminar Pedido

module.exports = router;
 
