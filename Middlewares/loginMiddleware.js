const User = require("../database/models/User")

const bcrypt = require('bcrypt')


let loginMiddleware = async (req,res,next) => {
    let {email, senha} = req.body
    let resultado = await User.findOne({
        where: {
            email: email
        },
        raw: true
    })
    
    console.log(resultado)
    if(!resultado){
        return res.send("email não encontrado")
    }
    if (bcrypt.compareSync(senha, resultado.senha)){
        next()
    } else {
        return res.send("senha incorreta")
    }
}

module.exports = loginMiddleware