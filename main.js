const vetor =[1,2,3,4,5,6,7,8,9,10];

const newVet = vetor.map(function(item, index){
    return item + index;
});

console.log(newVet);

const sum = vetor.reduce(function(total,next){
    return total + next;
})
console.log(sum);

const filtrar = vetor.filter(function(item){
    return item % 2 === 0;
});
console.log(filtrar);

const find = vetor.find(function(item){
    return item ===10;
});
console.log(find);