const emptyCadastroMiddleware = (req,res,next) => {
    let dados = req.body
    if(!dados.nome){
        return res.send("Você deve preencher o campo nome")
    }
    if(!dados.email){
        return res.send("Você deve preencher o campo email")
    }
    if(!dados.senha){
        return res.send("Você deve preencher o campo senha")
    }
    if(!dados.celular){
        return res.send("Você deve preencher o campo celular")
    }
    next()
}
module.exports = emptyCadastroMiddleware