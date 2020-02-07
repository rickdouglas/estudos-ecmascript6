// REST serve para pegar o resto das propriedades

const usuario ={
    nome:'Rick',
    idade:28,
    empresa :'Somar Contabilidade'
};
const{nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const array =[1,2,3,4,5];

const [ a,b,...c] = array;

console.log(a,b,c);

function teste (...params){
    return params;
}
console.log(teste(1,2,3,4));

// Spread, serve para propagar os dados

const vetor1 =[1,2,3];
const vetor2 =[4,5,6];

const vetor3 = [...vetor1, ...vetor2];

console.log(vetor3);

const usuario2 ={
    nome:'Rick',
    idade:28
};
const usuario3 = {...usuario2, nome:'Rick Douglas'};
console.log(usuario3);