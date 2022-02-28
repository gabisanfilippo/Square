const carrosselModel = require("../models/carrossel.json")

var homeController = {
    home: (req,res) => {
        res.render('home', {images: carrosselModel})
    }
}

module.exports = homeController