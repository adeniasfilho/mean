const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const usuario = new Usuario({
                email: req.body.email,
                password: req.body.password
            })
            usuario.save()
              .then(result => res.status(201).json({
                  mensagem: "Usuario cadastrado com sucesso",
                  resultado: result 
              })
              .catch(err => {
                  res.status(500).json({
                      erro: err 
                  })
              }))
        })
});

module.exports = router;
