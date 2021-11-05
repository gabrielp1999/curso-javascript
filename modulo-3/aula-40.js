/*entre 0 a 11 - bom dia
entre 12 a 17 - boa tarde
entre 18 a 23 - boa noite

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso utilizar um if antes
// eu posso ter varios else ifs na checagem
// podemos utilizar condições sem else if utilizando apenas if e else




const tenhoGrana = false;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else{
    console.log('Vou ficar em casa')
}

*/



const hora = 13;
if(hora >=0 && hora <= 11) {
    console.log("Bom dia");
}

else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
}

else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
}

else {
    console.log("Olá")
}


