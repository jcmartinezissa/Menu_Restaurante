const {Router} = require('express');
const cors = require('cors'); 
const router = Router();
const {getMenus, getMenu, getMenuCat, createMenu, updateMenu, deleteMenu} = require('../controllers/menusCtrl');

router.route('/');
router.get('/', getMenus); //todos los Menus
router.get('/categoria/:categoria', getMenuCat);  //buscar un Menu por categoria
router.get('/menu/:idM', cors(), getMenu);  //buscar un Menu por id
router.post('/nuevo', createMenu); // crear un Menu
router.put('/actualizar/:idM', updateMenu); // modificar Menu
router.delete('/eliminar/:idM', deleteMenu); // eliminar Menu

module.exports = router;
 
