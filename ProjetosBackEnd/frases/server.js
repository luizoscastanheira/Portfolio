// Camada REST

const express = require('express');
const server = express();

let data = new Date();
let mensagemDoDia = require('./mensagemDoDia');

server.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSlecionada = mensagemDoDia.retornarMensagemDoDia(dia);
    res.json({mensagem: mensagemSlecionada});
});

server.listen(8080, () =>{
    console.log('Servidor iniciado em: ' + data)
});