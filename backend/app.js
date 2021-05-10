const express = require("express");
const app = express();
app.use(express.json());
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
  const cliente = req.body;
  console.log(cliente);
  res.status(201).json({ mensagem: "Cliente inserido" });
});
app.use("/api/clientes", (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes,
  });
});
module.exports = app;
