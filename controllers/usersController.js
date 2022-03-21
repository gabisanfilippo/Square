const usuariosModel = require("../models/users.json")

const bcrypt = require('bcrypt')
var fs = require("fs")

const usersController = {
    exibeCadastro: (req, res) =>{
        res.render('usuarioCadastro')
    },
    cadastraCadastro: (req,res) => {
        let {nome, email, senha, celular} = req.body
        const hash = bcrypt.hashSync(senha, 10)
        const dados = {nome:nome, email:email, senha:hash, celular:celular}
        usuariosModel.push(dados)
        fs.appendFileSync("./models/users.json", JSON.stringify(usuariosModel), null, 4)
        res.render('usuarioLogin')
    },
    exibeLogin: (req,res) => {
        res.render('usuarioLogin')
    },
    logaLogin: (req,res) => {
        if(req.session.login){
            return res.redirect('/')
        }
        if(req.body){
            return res.redirect('usuarioLogin')
        }
    }
}

module.exports = usersController