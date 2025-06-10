var express = require("express");
var router = express.Router();

var dashQuizController = require("../controllers/dashQuizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/ultimasPartidas/:idVar", function (req, res) {
    dashQuizController.ultimasPartidas(req, res);
})

router.get("/estatisticasNotas/:idVar", function (req, res) {
    dashQuizController.estatisticasNotas(req, res);
})

module.exports = router;