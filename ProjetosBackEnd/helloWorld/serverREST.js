// Projeto Hello World
// Primeiro servidor - Padrão Rest

// Dados
const dados = [
    {"nome":"Rosi", "idade":45, "apelido":"Pereirão", "ocupacao":"Atendendente e Vagaba do Luizinho"}
]



// Primeiro: Tornar o Express utilizável dentro de nosso app/server
const express = require('express'); // Aqui ele é importado
const app = express(); // Aqui é atribuido a uma variável

// Segundo: Usamos a função .get da variável - ele recebe uma requisição e dá uma resposta
// aqui temos dois parametros: 1 - a url requistada pelo front-end, 2 - uma função com dois subparametros (req(requisição), res(resposta))
app.get('/', (req, res)=>{
    res.json(dados); // aqui a função .json é usanda no res para responder algo ao requisitante
});

// Terceiro: Usamos a função .listen para "escutar" por conexões em um porta http
// Aqui temos dois parametros: 1 - a porta de escuta, 2 - uma função a ser executada quando inicarmos a aplicação
app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor online. Iniciado em: ' + data)
});