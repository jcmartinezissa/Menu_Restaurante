const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL;

mongoose.connect(url);
const connection = mongoose.connection;

connection.once ('open', ()=> {
    console.log('CONEXION EXITOSA!');
});

module.exports =connection;
