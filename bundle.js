"use strict";

// Template Literals
var usuario = {
  nome: 'Rick',
  idade: 28,
  status: 'Procurando emprego de desenvolvedor junior'
};
var nome = usuario.nome,
    idade = usuario.idade,
    status = usuario.status;
console.log("Eu sou " + nome + " tenho " + idade + " anos e estou " + status); //Concatenação usando template literals

console.log("Meu nome \xE9 ".concat(nome, " tenho ").concat(idade, " e estou ").concat(status));
