const express = require('express');
const app = express();
app.use('/usuarios', require('./routes/usuarios'));

module.exports = app;
