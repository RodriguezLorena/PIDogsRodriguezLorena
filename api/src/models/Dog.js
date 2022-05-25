const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,    //se utiliza para poder diferenciar entre el 
			defaultValue: DataTypes.UUIDV4,  //id de la api y el id de mi propia DB
			allowNull: false,
			primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,

    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    }

  }, {timestamps: false});   //borramos las columnas que nos mandan al frente con los horarios
};

// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida
