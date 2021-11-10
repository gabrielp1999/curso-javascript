// declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log("Oie")
}


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('sou um dado');
}

souUmDado()

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma Arrow funcation")
}

funcaoArrow();