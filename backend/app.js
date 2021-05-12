const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cliente = require("./models/cliente.js");
const Cliente = ("./models/cliente");

app.use(express.json());
mongoose.connect('mongodb+srv://adenias:mongodb123@cluster0.ajwhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
  console.log("Conexão ok")
}).catch(() => {
  console.log("Conexão não ok")
})

const clientes = [
  {
    id: "1",
    nome: "Jose",
    fone: "11223344",
    email: "jose@email.com",
  },
  {
    id: "2",
    nome: "Jaqueline",
    fone: "22112211",
    email: "jaqueline@email.com",
  },
];
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );
  next();
});

app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente({
    nome:req.body.nome,
    fone:req.body.fone,
    email:req.body.email
  })
  cliente.save();
  console.log(cliente);
  res.status(201).json({mensagem:"Cliente inserido com sucesso"})
});

app.get("/api/clientes", (req, res, next) => {
  Cliente.find().then(documents => {
  res.status(200).json({
    mensagem:"Tudo ok",
    clientes:documents
  });
});
app.use("/api/clientes", (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes,
  });
});
});

module.exports = app;
