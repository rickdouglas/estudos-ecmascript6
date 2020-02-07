"use strict";

var usuario = {
  nome: 'Rick',
  idade: '28',
  endereco: {
    cidade: 'Lavras',
    estado: 'MG'
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);
