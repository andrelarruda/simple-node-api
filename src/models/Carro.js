const { Model, DataTypes } = require('sequelize');

class Carro extends Model{
  static init(sequelize){
    super.init({
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
    },{
      sequelize,
      tableName: 'carro',
    });
  }

  static associate(models){
    this.belongsToMany(models.Pessoa, { foreignKey:'carro_id', through: 'pessoas_carros', as: 'pessoas'});
  }

}

module.exports = Carro;