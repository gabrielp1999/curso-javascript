// dobre os números 
//                0, 1, 2,  3,  4 ......
const  numeros = [1, 2, 50, 80, 22, 8, 9];
const numerosEmDobro = numeros.map(valor =>  valor * 2 );
// console.log(numerosEmDobro)


const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Amanda', idade: 18},
    {nome: 'Luiz', idade: 50},
    {nome: 'Leticia', idade: 29},
    {nome: 'Ariel', idade: 25},
    {nome: 'Thiagol', idade: 20},
];

//  para mapear os nomes
const nomes = pessoas.map(obj => obj.nome);

const idades= pessoas.map(obj => ({idade: obj.idade}))

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})

console.log(comIds)

// Quando usar map ? 
//Então, quando usar cada um? Caso você queira obter um novo array cujos itens podem ser gerados
// a partir da aplicação dos itens originais em uma determinada função, então use o map.