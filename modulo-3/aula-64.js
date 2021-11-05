/*try{
    console.log(a);
    console.log('Abrir um aquivo')
    console.log('manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (e) {
    console.log('tratando o erro')
} finally{
    console.log(' finally: Eu sempre vou ser executado')
}*/

function retonaHora (data) {
    if(data && !(data instanceof Date)){
     throw new TypeError('Esperando instancia de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    });
}


try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retonaHora();
console.log(hora)
} catch (e){
     // tratar erro
} finally{
    console,log('tenha uma boa noite')
}