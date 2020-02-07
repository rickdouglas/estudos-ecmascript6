// Template Literals
const usuario ={
    nome:'Rick',
    idade:28,
    status:'Procurando emprego de desenvolvedor junior'
};
const {nome, idade, status} = usuario; 
console.log("Eu sou " + nome + " tenho " + idade + " anos e estou " + status);

//Concatenação usando template literals

console.log(`Meu nome é ${nome} tenho ${idade} e estou ${status}`);