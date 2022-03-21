const usuariosModel = require("../models/users.json")

const bcrypt = require('bcrypt')
const { renderFile } = require("ejs")


let loginMiddleware = (req,res,next) => {
    let {email, senha} = req.body
    let condicao = undefined
    for(let i of usuariosModel){
        if(bcrypt.compareSync(senha, i.senha) && email == i.email){
            req.session.login = email
        } else {
            let compareHash = bcrypt.compareSync(senha, i.senha)
            if(!compareHash){
                return res.send("Senha incorreta")
            }
            if(email != i.email){
                
                return res.send("email não cadastrado")
            }
        }
    }
    next()
}

module.exports = loginMiddleware