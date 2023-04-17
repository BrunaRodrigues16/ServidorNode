var express = require("express");
var app = express();
var port = process.env.PORT || 3000;  //Porta que pode se transformar numa porta 3000 - definir uma porta ou outra

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin", "*") //ajudará em testes mas não é legal deixar para o servidor final
    res.send("Olá!");
}); //Começamos a criar o CRUD

app.listen(port, () => {
    console.log(`Servidor rodando com a porta ${port}`)
});