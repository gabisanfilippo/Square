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
        res.send(dados)
    },
    exibeLogin: (req,res) => {
        res.render('usuarioLogin')
    },
    logaLogin: (req,res) => {
        let {email, senha} = req.body
        for(let i in usuariosModel){
            if(bcrypt.compareSync(senha, i.senha)){
                res.send("logado com sucesso")
            } else {
                return res.send("senha inválida")
            }
        }
    }
}

module.exports = usersController