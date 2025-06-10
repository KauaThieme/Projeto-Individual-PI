var database = require("../database/config");

function ultimasPartidas(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ");

    var instrucaoSql = `
        SELECT nota FROM DashboardDados 
        JOIN usuario ON DashboardDados.id_usuario = usuario.id 
        WHERE usuario.id = ${id_usuario} LIMIT 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function estatisticasNotas(id_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ");

    var instrucaoSql = `
       SELECT ROUND(AVG(nota)) AS "MediaGeral", MAX(nota) AS "MaiorNota"
       FROM DashboardDados
       JOIN usuario
       ON DashboardDados.id_usuario = usuario.id
       WHERE id_usuario = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    ultimasPartidas,
    estatisticasNotas
};