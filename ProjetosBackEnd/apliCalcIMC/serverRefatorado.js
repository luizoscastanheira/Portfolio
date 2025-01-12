// Criando uma API REST com recebimento de parametros
// Refatorado do anterior

// Primeiro - Conectando ao Express
const express = require('express');
const server = express();
// conectando à camada de servico (funcoes)
const calculadoraIMC = require('./calculadoraIMC.js');

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
    let peso = req.query.peso;
    let altura = req.query.altura;

    // o cálculo só ocorrera so ambos os paramentros foram numéricos
    if(calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)){
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.restornaStatusIMC(imc);

        let json = {imc:imc.toFixed(2),status:status};
        res.json(json);
    }else{
        res.status(400).json({'Erro':'Peso ou altura inválidos.'})
    }

});

// Terceiro - Criando um listem de escuta
server.listen(8080,()=>{
    let data = new Date();
    console.log("O Servidor está online desde: " + data);
});