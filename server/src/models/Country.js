const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.STRING,
      allowNull: false
    },
    population:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false});
};