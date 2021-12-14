const usuariosCtrl = {};

const Usuarios = require('../models/usuarios.js');

//consulta de todos los usuarios
usuariosCtrl.getUsuarios = async (req, res)=> {
    try {
        const usuarios = await Usuarios.find();
        res.json({usuarios});    

    } catch (error) {
        res.send('Error: '+error);
        console.log('Error al consultar todos los usuarios: '+error);          
    }
    
    console.log(res.json({mensaje: usuarios}));
};

//buscar usuario por nombre
usuariosCtrl.getUsuario = (Nombre) = async (req, res) => {
     try {
       const usuario = await Usuarios.findOne({nombre: Nombre});
        res.json({usuario});         
     } catch (error) {
        console.log('Error: '+error);
        res.send('Error en la busqueda de usuario');         
     }
};


//crear nuevo usuario
usuariosCtrl.createUsuario = async (req, res) => {
    const {nombre, email, password, estado, rol} = req.body;    
    const newUsuario = new Usuarios ({
        nombre: nombre,
        email: email,
        password: password,
        estado: estado,
        rol: rol});
    try {          
            await newUsuario.save();

            res.json({mensaje:'Se guardo el Usuario!'})
    
    } catch (error) {

       console.log('Error al crear el usuario'+error);
  
    }
};

module.exports = usuariosCtrl;
