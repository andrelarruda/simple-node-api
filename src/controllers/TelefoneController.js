const Pessoa = require('../models/Pessoa');
const Telefone = require('../models/Telefone');

module.exports = {
  async store(req, res) {
    const { pessoa_id } = req.params;
    const { ddd, numero } = req.body;

    const pessoa = await Pessoa.findByPk(pessoa_id);

    if (!pessoa){
      return res.status(400).json({ error: `Não existe pessoa cadastrada com id ${pessoa_id}.`})
    }
    // pessoa.addTelefones({ ddd, numero }); // Ver se tá certo adicionar o telefone assim

    const telefone = await Telefone.create({
      ddd,
      numero,
      pessoa_id,
    });


    return res.json(telefone);
  },

  async index(req, res){
    const { pessoa_id } = req.params;

    const pessoa = await Pessoa.findByPk(pessoa_id);

    if (!pessoa){
      return res.status(400).json({ error: `Não existe pessoa cadastrada com id ${pessoa_id}.`})
    }
    
    const telefones = await Telefone.findAll({
      where: {
        pessoa_id,
      }
    });

    if (telefones.length == 0){
      return res.json({message: `Pessoa ${pessoa_id} não tem telefones cadastrados.`});
    }

    return res.json(telefones);
  },
}