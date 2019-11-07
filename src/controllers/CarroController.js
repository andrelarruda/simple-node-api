const Pessoa = require('../models/Pessoa');
const Carro = require('../models/Carro');

module.exports = {
  async store(req, res) {
    const { pessoa_id } = req.params;
    const { marca, modelo } = req.body;

    const pessoa = await Pessoa.findByPk(pessoa_id);

    if (!pessoa){
      return res.status(400).json({ error: `Não existe pessoa cadastrada com id ${pessoa_id}.`});
    }

    // cadastra o carro
    const [carro, created] = await Carro.findOrCreate({
      where: {
        marca,
        modelo,
      }
    });

    await pessoa.addCarro(carro);

    return res.json(carro);
  },

  async index(req, res){
    const { pessoa_id } = req.params;
        
    const pessoa = await Pessoa.findByPk(pessoa_id, {
      // join
      include: {
        association: 'carros',
        // Para não mostra os atributos da tabela pivô:
        through: {
          attributes: [],
        }
      }
    });

    if (!pessoa){
      return res.status(400).json({ error: `Não existe pessoa cadastrada com id ${pessoa_id}.`});
    }

    return res.json(pessoa);
  },
}