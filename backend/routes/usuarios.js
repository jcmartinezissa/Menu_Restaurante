const {Router} = require('express');
const router = Router();
const {getUsuarios, getUsuario, createUsuario} = require('../controllers/usuariosCtrl');

router.route('/');
router.get('/todos',getUsuarios);
router.get('/usuario/:Nombre',getUsuario);
router.post('/nuevo', createUsuario);


module.exports = router;

