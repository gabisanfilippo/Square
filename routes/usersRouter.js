var express = require('express');
var router = express.Router();


const usuariosModel = require("../models/users.json")


const usersController = require("../controllers/usersController")

const emptyCadastroMiddleware = require("../Middlewares/emptyCadastroMiddleware")
const emptyLoginMiddleware = require("../Middlewares/emptyLoginMiddleware")
const loginMiddleware = require("../Middlewares/loginMiddleware")
const cadastroRepetidoMiddleware = require("../Middlewares/cadastroRepetidoMiddleware")

router.get("/cadastro", usersController.exibeCadastro)
router.post("/cadastro", emptyCadastroMiddleware, cadastroRepetidoMiddleware, usersController.cadastraCadastro)

router.get("/login", usersController.exibeLogin)
router.post("/login", emptyLoginMiddleware, loginMiddleware, usersController.logaLogin)

module.exports = router;
