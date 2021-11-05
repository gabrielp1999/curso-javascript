const numeros= [1, 2, 3, 4, 5, 6, 7]

for (let numero of numeros) {

    if (numero ===2 || numero ===5) {
        continue; //continue serve para chegar e pular a interação mais continua checando
    }

    console.log(numero)

    if (numero ===6) {
        console.log("6 encontrado , saindo ...")
        break;  //serve para checar o elemento e quando encontra ja sai do laço
    }
}
