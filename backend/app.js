const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clienteRoutes = require('./rotas/clientes');
mongoose.connect('mongodb+srv://user_maua:senha_maua@cluster0.ssm0w.mongodb.net/pessoal - cliente ? retryWrites = true & w=majority')
  .then(() => {
    console.log("Conexão OK")
  }).catch((e) => {
    console.log("Conexão NOK: " + e)
  });
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE,OPTIONS');
  next();
});
app.use ('/api/clientes', clienteRoutes);
module.exports = app;
