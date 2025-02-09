// Criando uma api REST

const express = require('express');
const cors = require('cors'); // Importe o cors
const server = express();
server.use(cors()); // Use o cors

// Exemplo de como configurar o cors para aceitar conexões de uma origem especifica
// caso contrário o padrão com cors é "*" acietar de qualquer origem
//server.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Segundo - funções de requisição e resposta
server.get('/',(req,res)=>{
    let mensagem = ({mensagem:"O Servidor está online"});
    res.json(mensagem);
});

// Calculando Temperatura
server.get('/celsius', (req,res) => {
    console.log(req.query);
    let valor = req.query.valor;
    let resposta = (valor * (1.8)) + 32;
    res.json({resposta:resposta.toFixed(3)}); // o .toFixed(3) é opcional para criar um "arredondamento"
});

// Abrindo a escuta do servidor
server.listen(8080, ()=>{
    let data = new Date();
    console.log('Servidor ativado em: ' + data);
});