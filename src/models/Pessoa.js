const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
    },{
      sequelize,
      tableName: 'pessoa',
    });
  }

  static associate(models){
    this.hasMany(models.Telefone, { foreignKey:'pessoa_id', as: 'telefones'});
    this.belongsToMany(models.Carro, { foreignKey: 'pessoa_id', through: 'pessoas_carros', as: 'carros'});
  }

}

module.exports = Pessoa;