const usuariosModel = require("../models/usuarios.json")

let cadastroRepetidoMiddleware = (req,res,next) => {
    let {email} = req.body
    for(let i of usuariosModel){
        if(email == i.email){
            return res.send("Usuário já cadastrado")
        }
    }
    next()
}
module.exports = cadastroRepetidoMiddleware