// Criando uma API RESTful de listagem de Unidades da Federação
// funcional e REFATORADO para uso em camadas

import express from 'express';
import { buscarUfPorId, buscarUfsPorNome, buscarUfs } from './servico/servico.js';

const app = express();

let data = new Date();

// Abrindo porta de Escuta
app.listen(8080, ()=>{
    console.log('O Servidor entrou online em:' + data)
});

// Lista de EndPoints
// Funcionamento do Servidor
app.get("/", (req,res)=>{
    res.send("Servidor Online em: " + data)
});

// ROTA 1 - Retornando a Coleçao completa e procura por nome
app.get("/ufs", (req,res)=>{
    let busca = req.query.busca;
    if(!busca){
        res.json(buscarUfs())
    }else{
        res.json(buscarUfsPorNome(busca));  
    }
});

// ROTA 2 - Retornando apenas um UF por id
app.get("/ufs/:iduf", (req,res)=>{
    let idUF = parseInt(req.params.iduf); // capturando o um valor dinamico que corresponde ao que se digitar em :iduf
    let mensagemErro = "";
    let uf;

    // Criando um tratamento de erro na API
    if(!(isNaN(idUF))){
        uf = buscarUfPorId(idUF)
        if(!uf){
            mensagemErro = "UF não encontrada!";
        }
    }else{
        mensagemErro = "Requisição inválida ou Rota não encontrada!";
    }

    if (uf){
        res.json(uf);
    } else {
        res.status(404).send({"ERRO":mensagemErro});
    };
    
});


