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
usuariosCtrl.getUsuario = async (req, res) => {
     let texto = req.params.nombre;
     try {
        const usuario = await Usuarios.findOne({$or: [{'nombre': texto}, {'email': texto}]});
        if (usuario == null) {
            res.send('No se encontro el usuario');
        }else
        {
            res.json({usuario});
        }               
        
     } catch (error) {         
        res.send('Error al realizar la busqueda: '+error);
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
            res.json(newUsuario);
    
    } catch (error) {
        res.send('Error al crear el usuario'+error);  
    }
};

//modiifcar usuario por correo
usuariosCtrl.updateUsuario = async (req, res) => {
    const correo =  req.params.correo;
    const {nombre, email, password, estado, rol} = req.body;
    try {
      let usuario =  await Usuarios.findOneAndUpdate({email: correo}, {nombre, email, password, estado, rol}, {new: true});         
      res.json(usuario);              
    } catch (error) {         
       res.send('No se pudo actualizar: '+error);
    } 
};

//eliminar usuario por correo
usuariosCtrl.deleteUsuario = async (req, res) => {
    const correo =  req.params.correo;
    try {
      let usuario =  await Usuarios.deleteOne({email: correo});         
      res.json({mensaje: "usuario eliminado"});              
    } catch (error) {         
       res.send('No se pudo eliminar: '+error);
    } 
};

module.exports = usuariosCtrl;
