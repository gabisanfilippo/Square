const usuariosModel = require("../models/usuarios.json")

const bcrypt = require('bcrypt')
var fs = require("fs")

console.log(__dirname + "../model")
const usersController = {
    exibeCadastro: (req, res) =>{
        res.render('usuarioCadastro')
    },
    cadastraCadastro: (req,res) => {
        let {nome, email, senha, celular} = req.body
        const hash = bcrypt.hashSync(senha, 10)
        const dados = {nome:nome, email:email, senha:hash, celular:celular}
        fs.writeFileSync("users.json", JSON.stringify(dados))
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