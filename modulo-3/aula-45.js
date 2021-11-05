// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 5200;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : "Usuario Free";
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || "Preta"
console.log(corPadrao);