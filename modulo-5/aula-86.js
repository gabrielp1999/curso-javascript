// A reduce serve para reduzir um array em um elemento só.


// Some  todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

//               0, 1,  2,  3, 4 .....
const numeros = [1, 2, 4, 3, 5, 7, 9];
const total = numeros.reduce(function (acomulador, valor, indice, array){
 acomulador += valor;
 return acomulador;
});



// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Amanda', idade: 18},
    {nome: 'Luiz', idade: 50},
    {nome: 'Leticia', idade: 29},
    {nome: 'Ariel', idade: 62},
    {nome: 'Thiagol', idade: 20},
];

const maisVelha = pessoas.reduce(function(acomulador, valor){
    if(acomulador.idade > valor.idade) return acomulador;
    return valor;
});
console.log(maisVelha)

// A reduce serve para reduzir um array em um elemento só.