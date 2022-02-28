var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

router.get("/cadastro", usersController.exibeCadastro)
router.post("/cadastro", usersController.cadastraCadastro)

module.exports = router;
