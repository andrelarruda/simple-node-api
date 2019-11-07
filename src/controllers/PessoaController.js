const Pessoa = require('../models/Pessoa');

module.exports = {
  async store(req, res) {
    const { nome, cpf } = req.body;

    const pessoa = await Pessoa.create({
      nome,
      cpf,
    });
    return res.status(201).json(pessoa);
  },

  async index(req, res){
    const pessoas = await Pessoa.findAll();

    return res.json(pessoas);
  },

  async listOne(req, res){
    const { id } = req.params;
    
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa){
      return res.status(400).json({ message: `Não existe pessoa cadastrada com o id ${id}.`})
    }
    return res.json(pessoa);
  },
}