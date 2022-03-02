const carrosselModel = require("../models/carrossel.json")
const maisVendidosModel = require("../models/usuarios.json")

var homeController = {
    home: (req,res) => {
        res.render('home', {images: carrosselModel, maisVendidos: maisVendidosModel})
    }
}

module.exports = homeController