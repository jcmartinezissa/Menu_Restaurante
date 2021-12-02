const {Router} = require('express');
const {GetUsuarios, CreateUsuarios} = require('../controllers/usuariosCtrl');
const router = Router();

router.route('/usuarios/')
.get('/todos', GetUsuarios)
.post('/crear', CreateUsuarios);

module.export = router;

