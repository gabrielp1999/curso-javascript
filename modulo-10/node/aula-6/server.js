const express = require('express');
const app = express();

//         Criar   Ler   Atualizar   Apagar
// CRUD => CREATE, READ,  UPTADE,    DELETE

// https://meusite.com/ <= GET => Entregue a pagina
// https://meusite.com/sobre <= GET => Entregue a pagina /sobre
// https://meusite.com/contato <= GET => Entregue a pagina /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar nome</button>
        </form>
    `);
})

app.post('/', (req, res) =>{
    res.send('Recebir o formulario');
});

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log("Servidor executando na porta 3000");
});