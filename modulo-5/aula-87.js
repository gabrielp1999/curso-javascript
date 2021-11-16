// Retorne a soma do dobro de todos os pares
// => Filtrar pares
// => Dobrar os valores
// => Reduzir (somar tudo)

const numeros = [1, 2, 4, 3, 5, 7, 9, 10, 40, 50];
const numerosPares = numeros
.filter(valor => valor % 2 ===0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares)
// Numeros pares [ 2, 4, 10, 40, 50 ]
// Dobro         [ 4, 8, 20, 80, 100 ]

