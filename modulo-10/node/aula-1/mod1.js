class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

// exports serve para exportar função e variavel
exports.Pessoa = Pessoa;

const nome = "Gabriel";
const sobrenome = "Pereira";

// serve para você sobrescrever o arquivo todo
module.exports = {
nome, sobrenome, Pessoa
};



// const nome = "Gabriel";
// const sobrenome = "Pereira";

// const falaNome = () => nome + " " + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquercoisa = "O que eu quiser exportar"