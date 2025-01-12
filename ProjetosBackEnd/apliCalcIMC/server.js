// Criando uma API REST com recebimento de parametros

// Primeiro - Conectando ao Express
const express = require('express');
const server = express();

// Segundo - funções de requisição e resposta
server.get('/',(req,res)=>{
    let mensagem = ({mensagem:"O Servidor está online"});
    res.json(mensagem);
});

server.get('/teste',(req,res)=>{
    let msgTeste = ({msgTeste:"Página de teste"})
    res.json(msgTeste)
});

// Recebendo dados do front-end
server.get('/imcCalc', (req,res)=>{
    console.log(req.query);
    let peso = req.query.peso;
    let altura = req.query.altura
    let imc = peso / (altura * altura)
    res.json({imc:imc.toFixed(2)})
    
})

// Terceiro - Criando um listem de escuta
server.listen(8080,()=>{
    let data = new Date();
    console.log("O Servidor está online desde: " + data);
});