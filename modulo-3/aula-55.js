// for in => lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Pereira',
    idade: 22
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

/*
for (let indice in frutas) {
    console.log(frutas[indice])
}
*/

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

}
*/