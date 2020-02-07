const usuario = {
    nome :'Rick',
    idade :'28',
    endereco: {
        cidade :'Lavras',
        estado:'MG'
    },
};

console.log(usuario);

const { nome, idade, endereco:{cidade} } = usuario;

console.log(nome, idade, cidade);