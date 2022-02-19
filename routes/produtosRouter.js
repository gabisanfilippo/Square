var express = require('express');
var router = express.Router();

var produtosController = require('../controllers/produtosController')

router.get('/carrinho',produtosController.carrinho)

module.exports = router