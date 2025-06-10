var database = require("../database/config");

function adicionarPartida(id_usuario, nota) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ");
    
    var instrucaoSql = `
        INSERT INTO DashboardDados(id_usuario, nota) VALUES ("${id_usuario}", "${nota}");
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarPartida
};