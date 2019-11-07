const express = require('express');
const routes = express.Router();

const PessoaController = require("./controllers/PessoaController")
const TelefoneController = require("./controllers/TelefoneController")
const CarroController = require("./controllers/CarroController")

routes.get("/", (req, res) => {
  res.json({message: "Hello Buddy, this is the entry point of the api! :)"})
});

// Pessoa
routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas', PessoaController.index);
routes.get('/pessoas/:id', PessoaController.listOne);

//Telefone
routes.post('/pessoas/:pessoa_id/telefones', TelefoneController.store);
routes.get('/pessoas/:pessoa_id/telefones', TelefoneController.index);

// carros
routes.post('/pessoas/:pessoa_id/carros', CarroController.store);
routes.get('/pessoas/:pessoa_id/carros', CarroController.index);

module.exports = routes;