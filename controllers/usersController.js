const usuariosModel = require("../models/usuarios.json")

const usersController = {
    exibeCadastro: (req, res) =>{
        res.render('usuarioCadastro')
    },
    cadastraCadastro: (req,res) => {
        let dados = req.body
        usuariosModel.push(dados)
        res.redirect("/")
    }
}

module.exports = usersController