var database = require("../database/config");

function verificarQuiz(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var instrucaoSql = `
        SELECT jogadores, pontos
        FROM quiz
        WHERE ${id} = (SELECT MAX(pontos) FROM quiz);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
verificarQuiz   
};