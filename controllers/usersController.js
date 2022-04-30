const User = require('../database/models/User')
const sequelize = require("../database/config/config")

const bcrypt = require('bcrypt')
var fs = require("fs")

const usersController = {
    exibeCadastro: (req, res) =>{
        res.render('usuarioCadastro')
    },
    cadastraCadastro: async (req,res) => {
        let {nome, email, senha, celular} = req.body
        const hash = bcrypt.hashSync(senha, 10)
        User.create({
            nome: nome,
            email: email,
            senha: hash,
            celular: celular
        })
        res.redirect('/users/login')
    },
    exibeLogin: (req,res) => {
        res.render('usuarioLogin')
    },
    logaLogin: (req,res) => {
        res.redirect('/')
    }
}

module.exports = usersController