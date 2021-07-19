"use strict";
//Boolean
var contaPaga = false;
//Number
var idade = 18;
var avaliacao = 1.9;
//String
var nome = "Bruno";
//Array
var idades = [23, 10, 20];
var idades2 = [23, 10, 20];
//Tuple
var jogadores;
jogadores = ["Vitor", 23, true];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornDaApi = [123, "Registro", false];
var retornDaApi2 = {
//...
};
//Void
function printNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//Objeto
function criar(objeto) {
    //...
}
criar({
    nome: "bruno",
});
var contato = {
    nome: "Bruno",
    telefone: 11000000,
};
var input = document.getElementById("numero1"); /*Informa que é um elemento html - forma1*/
var input2 = document.getElementById("numero1"); /*Informa que é um elemento html - forma2*/
console.log(input.value);
