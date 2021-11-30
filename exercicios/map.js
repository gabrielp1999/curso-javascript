//Ele funciona como uma estrutura de repetição, 
//pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.



// const usuarios = [
//     {
//       nome: "Felipe",
//       idade: 30
//     }, 
//     {
//       nome: "Gabriel",
//       idade: 22
//     },
//     {
//       nome: "Crislaine",
//       idade: 29
//     },
//     {
//     nome: "Ana Luiza",
//     idade: 16
//     }
//   ];


//   let usuario = usuarios.map(concatenar);
//   console.log(usuario);

//   function concatenar(elemento) {
//     let nome = elemento.nome + " " + elemento.idade;
//     return nome;
//   };
const usuarios = [
    {
      nome: "Felipe",
      idade: 30,
          altura: 160
    }, 
    {
      nome: "Gabriel",
      idade: 22,
          altura: 180
    },
    {
      nome: "Crislaine",
      idade: 29,
          altura: 150,
    },
    {
        nome: "Ana Luiza",
        idade: 16,
          altura: 170
    }
  ];

  
 let usuario = usuarios.map(mudarAltura);
 console.log(usuario);

function mudarAltura(elemento) {
    let altura = elemento.altura / 100;
    return {
        nome: elemento.nome,
        idade: elemento.idade,
        altura: altura
    };
};

