const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Telefone = require('../models/Telefone');
const Carro = require('../models/Carro');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Telefone.init(connection)
Carro.init(connection)

Pessoa.associate(connection.models);
Telefone.associate(connection.models);
Carro.associate(connection.models);

module.exports = connection

