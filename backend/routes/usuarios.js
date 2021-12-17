const {Router} = require('express');
const cors = require('cors'); 
const router = Router();
const {getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuariosCtrl');

router.route('/');
router.get('/',getUsuarios); //todos los usuarios
router.get('/:nombre', cors(), getUsuario);  //buscar un usuario por nombre
router.post('/nuevo', createUsuario); // crear un usuario
router.put('/actualizar/:correo', updateUsuario); // modificar usuario
router.delete('/eliminar/:correo', deleteUsuario); // eliminar usuario


module.exports = router;
 
