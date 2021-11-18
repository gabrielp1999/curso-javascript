function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random () * (max - min) + min);
}

// promise é uma função que vai da uma promessa pode demorar um tempo,
// mais vai da um retorno positivo ou negativo

function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject (false);

        setTimeout( () => {
            resolve(msg)
        }, tempo);
        

    })
}

esperaAi('Conexão com o DB', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1,3));
})
.then(resposta => {
    console.log(resposta);

}).then(() =>{
    console.log('Exibe dados na tela')
})

.catch( e =>{
    console.log('Erro', e)
});

console.log('Isso aqui sera exibido antes de qualquer promisse')
