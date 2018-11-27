const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Credential = sequelize.define('Credential', {
  
  id: {

    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  name:{
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },

  email:{
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  
  password:{
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },

},
  { 
    timestamps: false
  }
);

module.exports = Credential;
