function criaMultiplicador(multiplcador) {
    //multiplicador
    return function(n) {
        return n * multiplcador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(4);
const quadriplica = criaMultiplicador(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

















// return
// retorna um valor
// retornar uma função
/*function soma(a, b) {
    return a + b;
}

function soma2(a, b) {

 console.log(soma(a + b));
} 
soma2(5, 2)

document.addEventListener('click', function() {
    document.body.style.backgroundColor ="violet";
});
 */

