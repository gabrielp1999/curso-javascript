const pessoa = {
    nome: 'Gabriel',
    Sobrenome: 'Pereira',
    idade: 22,
    endereco: {
        rua: 'Rua Aquiles Diniz',
        numero: 350
    }

}

//Atribuição via desestruturação
const { nome, Sobrenome, idade } = pessoa;
console.log(nome, Sobrenome);


//console.log(pessoa.nome)