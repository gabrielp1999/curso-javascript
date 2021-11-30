
// const materiaisEscolares = ["lapis", 'borracha', 'caneta', 'caderno', 'apontador', 'tesoura', 'regua'];

// const materiaisFiltrado = materiaisEscolares.filter(function(material) {
//     return material.length >= 5; 

// });
// console.log(materiaisFiltrado)

// const numeros = [32, 22, 2, 43, 18, 13, 9, 62, 25, 4, 57]

// const numerosMultiplicado = numeros.filter( numero => numero * 3 < 57)

// console.log(numerosMultiplicado)

// const pessoas = ["Felipe Siqueira", "Gabriel Pereira Miranda", "Crislaine Hercilia da Silva Siqueira", "Ronaldinho Gaucho"];

// const pessoasTresNomes = pessoas.filter(function(pessoa) {
//     //split gera uma nova array separando as string por espaço
//     const nome = pessoa.split(' ');
//     const nomesMaiorTres = nome.length < 3;
//     return nomesMaiorTres;
// });
// console.log(pessoasTresNomes)

//filter gera um novo array filtrado

const usuarios = [
    {
      nome: "Felipe",
      idade: 30
    }, 
    {
      nome: "Gabriel",
      idade: 22
    },
    {
      nome: "Crislaine",
      idade: 29
    },
    {
    nome: "Ana Luiza",
    idade: 16
    }
  ];

  const pessoasComMaisDe22 = usuarios.filter(obj => obj.idade >  22);
  console.log(pessoasComMaisDe22)