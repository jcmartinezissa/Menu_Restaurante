const usuariosCtrl = {};

const Usuarios = require('../models/usuarios');

//consulta de todos los usuarios
usuariosCtrl.GetUsuarios = async (req, res)=> {
    const usuarios = await Usuarios.find();
    res.json({mensaje: usuarios});
};

//crear nuevo usuario
usuariosCtrl.CreateUsuario = async (req, res) => {
    const {nombre, email, password, estado, rol} = req.body;
    const newUsuario = new Usuarios({
        nombre: nombre,
        email: email,
        password: password,
        estado: estado,
        rol: rol});
        console.log(newUsuario);
        await newUsuario.save();
        res.json({mensaje:'Se guardo el Usuario!'})
};




