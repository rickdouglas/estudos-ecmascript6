"use strict";

var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newVet = vetor.map(function (item, index) {
  return item + index;
});
console.log(newVet);
var sum = vetor.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filtrar = vetor.filter(function (item) {
  return item % 2 === 0;
});
console.log(filtrar);
var find = vetor.find(function (item) {
  return item === 10;
});
console.log(find);
