var dashQuizModels = require("../models/dashQuizModels");

function ultimasPartidas(req, res) {
    var id_usuario = req.params.idVar;

    dashQuizModels.ultimasPartidas(id_usuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String


                console.log(resultadoAutenticar);

                res.json(resultadoAutenticar);


            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function estatisticasNotas(req, res) {
    var id_usuario = req.params.idVar;

    dashQuizModels.estatisticasNotas(id_usuario)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String


                console.log(resultadoAutenticar);

                res.json(resultadoAutenticar);


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
    ultimasPartidas,
    estatisticasNotas
}