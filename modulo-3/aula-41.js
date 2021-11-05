const numero = 10;
// se ( numero >= 0 && numero <= 5) {codigo}
// se não, faça isso {o codigo}

if ( numero >= 10){
    console.log(" o numero é igual ou maior que 10")
}

if ( numero >= 0 && numero <= 5){
    console.log('o numero está entre 0 a 5')
}
else if ( numero >= 6 && numero <= 10) {
    console.log('o numero está entre 6 a 10')
}
else if ( numero >= 11 && numero <= 15) {
    console.log('o numero está entre 11 a 15')
}

else{
    console.log('o numero é maior que 15')
}

console.log("teste");