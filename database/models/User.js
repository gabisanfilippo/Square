const Sequelize = require('sequelize');
const database = require('../config/config');


let User = database.define(
    'User',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        celular: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: "users",
        timestamps: false
    }
)

module.exports = User