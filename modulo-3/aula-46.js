/*const data = new Date('2021-11-03  15:40:50'); // ano , mes, dia , horas, minutos, segundo, e milesimo de segundos

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // js mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milesimos', data.getMilliseconds())
console.log('Dia Semana', data.getDay()) // 0- domingo, -6 Sábado

console.log(data.now()); */

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

console.log(formataData(new Date()));