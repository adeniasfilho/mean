const path = require ('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clienteRoutes = require('./rotas/clientes');
const usuarioRoutes = require ('./rotas/usuario');

mongoose.connect('mongodb+srv://user_maua:mongodb123@cluster0.ssm0w.mongodb.net/pessoal - cliente ? retryWrites = true & w=majority')
  .then(() => {
    console.log("Conexão OK")
  }).catch((e) => {
    console.log("Conexão NOK: " + e)
  });
app.use(bodyParser.json());
app.use('/imagens', express.static(path.join("backend/imagens")));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE,OPTIONS');
  next();
});

app.use ('/api/clientes', clienteRoutes);
app.use ('/api/usuario', usuarioRoutes);

module.exports = app;
