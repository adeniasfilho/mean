import express, {
  json
} from "express";
const app = express();
import {
  connect
} from "mongoose";

import Cliente, {
  find,
  deleteOne
} from "./models/cliente";

app.use(json());


connect(
    "mongodb+srv://adenias:mongodb123@cluster0.ajwhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(() => {
    console.log("Conexão NOK");
  });

  app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE,OPTIONS');
    next();
    });

app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  });
  cliente.save();
  console.log(cliente);
  res.status(201).json({
    mensagem: "Cliente inserido com sucesso",
  });
});

app.get("/api/clientes", (req, res, next) => {
  find().then((documents) => {
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});

app.delete("/api/clientes/:id", (req, res, next) => {
  deleteOne({
    _id: req.params.id,
  }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({
      mensagem: "Cliente removido",
    });
  });
});

app.put("/api/clientes/:id", (req, res, next) => {
  const cliente = new Cliente({
    _id: req.params.id, // _id é do mongodb;requisição feita
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email
  });
  Cliente.updateOne({
      _id: req.params.id
    }, cliente)
    .then((resultado) => {
      console.log(resultado)
    });
  res.status(200).json({
    mensagem: 'Atualização realizada com sucesso'
  })
});

export default app;
