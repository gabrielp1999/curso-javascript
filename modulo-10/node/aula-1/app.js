const path = require('path')
const axios = require('axios');
const { Pessoa } = require("./mod1");
const mod1 = require("./mod1");

const p1 = new Pessoa("jão");
console.log(mod1);
console.log(p1)

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')

// .then(response => console.log(response.data.nome))
// .catch(e => console.log(e))


// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome())