"use strict";

var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newVet = vetor.map(function (item) {
  return item * 2;
});
console.log(newVet);

var teste = function teste() {
  return {
    nome: 'Rick'
  };
};

console.log(teste());
