const User = require("../database/models/User")

let cadastroRepetidoMiddleware = async (req,res,next) => {
    let {email} = req.body
    let resultado = await User.findOne({
        where: {
            email: email
        },
        raw: true
    })
    if(!resultado){
        next()
    }else{
        res.send("email já cadastrado")
    }
}
module.exports = cadastroRepetidoMiddleware