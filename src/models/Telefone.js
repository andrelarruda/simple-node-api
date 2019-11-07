const { Model, DataTypes } = require('sequelize');

class Telefone extends Model{
  static init(sequelize){
    super.init({
      ddd: DataTypes.STRING,
      numero: DataTypes.STRING,
    },{
      sequelize,
      tableName: 'telefone',
    });
  }

  static associate(models){
    this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa'});
  }

}

module.exports = Telefone;