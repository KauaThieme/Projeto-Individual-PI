var quizModels = require("../models/quizModels");

function adicionarPartida(req, res) {
    var id_usuario = req.body.id_usuarioServer;
    var nota = req.body.notaServer;

        quizModels.adicionarPartida(id_usuario, nota)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id_usuario: resultadoAutenticar[0].id_usuario,
                            nota: resultadoAutenticar[0].nota
                        });

                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    adicionarPartida
}