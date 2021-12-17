const menusCtrl = {};
const Menus = require('../models/menus');

//consulta de todos los menus
menusCtrl.getMenus = async (req, res) => {
    try {
        const Menu = await Menus.find();
        res.json({ Menu });

    } catch (error) {
        res.send('Error: ' + error);
        console.log('Error al consultar todos los Menu: ' + error);
    }
    console.log(res.json({ mensaje: menus }));
};

//buscar menu por Id
menusCtrl.getMenu = async (req, res) => {
    const idM = req.params.idM;    
    try {    
        const Menu = await Menus.findOne({_id:idM});
            res.json({Menu});
       
    } catch (error) {
        res.send('Error al realizar la busqueda: ' + error);
    }
};

//buscar menu por cateogoria
menusCtrl.getMenuCat = async (req, res) => {
    let categoria = req.params.categoria;
    try {
        const menu = await Menus.find({'categoria': categoria});
        if (menu == null) {
            res.send('No se encontro el Menu');
        } else {
            res.json({ menu });
        }
    } catch (error) {
        res.send('Error al realizar la busqueda: ' + error);
    }
};

//crear nuevo Menu
menusCtrl.createMenu = async (req, res) => {
    const { nombre, imagen, estado, precio, detalle, categoria } = req.body;
    const newMenu = new Menus({
        nombre: nombre,
        imagen: imagen,
        estado: estado,
        precio: precio,
        detalle: detalle,
        categoria: categoria
    });
 
    try {
        await newMenu.save();
        res.json(newMenu);
    } catch (error) {
        res.send('Error al crear el Menu: ' + error);
    }
};

//modiifcar Menu por idmenu
menusCtrl.updateMenu = async (req, res) => {
    const idM = req.params.idM;
    const { nombre, imagen, estado, precio, detalle, categoria } = req.body;
    try {
        let menu = await Menus.findOneAndUpdate({_id:idM}, { nombre, imagen, estado, precio, detalle, categoria }, { new: true });
        res.json(menu);
    } catch (error) {
        res.send('No se pudo actualizar: ' + error);
    }
};

//eliminar menu por id
menusCtrl.deleteMenu = async (req, res) => {
    const idM = req.params.idM;
    try {
        const menu = await Menus.deleteOne({_id:idM});
        res.json({ mensaje: "Menu eliminado" });
    } catch (error) {
        res.send('No se pudo eliminar: ' + error);
    }
};

module.exports = menusCtrl;
