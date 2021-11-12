// Filter => Sempre retorna um array, com a mesma quantidade de elementos ou menos 
// ele tem a função de filtrar o conteúdo de uma array.


// Retotne os números maiores do que 10
//                0, 1, 2,  3,  4 ......
const  numeros = [1, 2, 50, 80, 22, 10, 15, 8, 9];

const numerosFiltrado = numeros.filter((valor) => valor > 20);
// console.log(numerosFiltrado);


// const numerosFiltrado = numeros.filter((valor) => {
//     return valor > 10;
// });

// function callbackFilter (valor) {
//     return valor > 10;
// }

// const numerosFiltrado = numeros.filter(callbackFilter);




// Retorne as pessoas que tem o nome com 6 letras ou mais
// Retorne as pessoas que tem mais de 25 anos
// Retorne as pessoas que cujo o nome termina com a
const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Amanda', idade: 18},
    {nome: 'Luiz', idade: 50},
    {nome: 'Leticia', idade: 29},
    {nome: 'Ariel', idade: 25},
    {nome: 'Thiagol', idade: 20},
];


// Retorne as pessoas que tem mais de 25 anos
const pessoasComMaisDe25 = pessoas.filter(obj => obj.idade >  25);


// Retorne as pessoas que tem o nome com 6 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length  >=  6);


// Retorne as pessoas que cujo o nome termina com a
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(nomeTerminaComA);


// const pessoasComNomeGrande = pessoas.filter(function(obj) {
    // return obj.nome.length >= 6;