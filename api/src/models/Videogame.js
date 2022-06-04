const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    raiting: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    plataform: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });
}

