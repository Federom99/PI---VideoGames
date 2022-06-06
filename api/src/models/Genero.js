const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('genero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   primaryKey: true,
    // },
   
  });
}