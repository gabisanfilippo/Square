const emptyLoginMiddleware = (req,res,next) => {
    let dados = req.body
    if(!dados.email){
        return res.send("Você deve preencher o campo email")
    }
    if(!dados.senha){
        return res.send("Você deve preencher o campo senha")
    }
    next()
}
module.exports = emptyLoginMiddleware