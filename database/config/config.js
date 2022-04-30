const Sequelize = require('sequelize'); // Letra maiuscula por ser uma classe 

const sequelize = new Sequelize('square', 'root', 'GaBi2040', {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306'
} );

module.exports = sequelize;
