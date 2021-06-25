//método do ECM em JS

let url = "integracao/select",
    query = "select * from checkin_prova_pratica";
parametros = {
    connectionName: "CONEXAO",
    query: query,
};

Ecm.Api2.Post("integracao/select", parametros).done(function (dados) {
    if (dados) {
        //trata os dados retornados da query
    }
});