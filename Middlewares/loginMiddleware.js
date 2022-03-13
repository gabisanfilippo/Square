const usuariosModel = require("../models/users.json")

const bcrypt = require('bcrypt')


let loginMiddleware = (req,res,next) => {
    let {email, senha} = req.body
    for(let i of usuariosModel){
        if(bcrypt.compareSync(senha, i.senha) && email == i.email){
            res.send("logado com sucesso")
        } else {
            if(!bcrypt.compareSync(senha, i.senha)){
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