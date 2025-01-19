// Esta é Camada API REST

// Importando camada camada de Serviço
const servico = require('./servico');

// Criando um função de Data - Isso é opcional
let data = new Date();

// Primeiro - Criando o acesso ao Express
const express = require('express');
const server = express();

// Segundo - Criando uma resposta Teste com o .get
server.get('/',(req, res)=>{
    let ano = req.query.ano;

    if(servico.servicoValidaAno(ano))
        {
            var fato = servico.servicoBuscarFatoPorAno(ano);
            res.json({fato:fato});
        }
        else
        {
            res.status(400).json({erro:'Parâmetro ano inválido'});
        }



    //let anoFato = servico.servicoBuscarFatoPorAno(ano)
    //res.json({mensagem:"O Servidor está on-line", ano:anoFato});
});

// Terceiro - abrindo uma porta de escuta
server.listen(8080, ()=>{
    console.log("O servidor entrou online em: " + data);
});