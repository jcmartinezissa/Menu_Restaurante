const express = require('express');
const app = express();
// const  bodyParser = require('body-parser');
//app.use(express.urlencoded({ extended: true} ));
// app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());

//usuarios
app.use('/api/usuarios', require('./routes/usuarios'));
//menus

app.use('/api/menus', require('./routes/menus'));
//pedidos
app.use('/api/pedidos', require('./routes/pedidos'));


module.exports = app
