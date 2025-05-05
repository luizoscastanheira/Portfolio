// Criando uma API RESTful de listagem de Unidades da Federação
// Funcional e sem refatorar

import colecaoUf from './dados/dbDados.js';

// Importando o express após sua instalação via npm
import express from 'express';

// criando uma variável dereferencia para o objeto express
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
    const buscaPorNome = colecaoUf.filter(uf => uf.nome.toLowerCase().includes(busca.toLowerCase()))
    if(!busca){
        res.json(colecaoUf)
    }else{
        res.json(buscaPorNome);  
    }
});

// ROTA 2 - Retornando apenas um UF por id
app.get("/ufs/:iduf", (req,res)=>{
    let idUF = parseInt(req.params.iduf); // capturando o um valor dinamico que corresponde ao que se digitar em :iduf
    let mensagemErro = "";
    let uf;

    // Criando um tratamento de erro na API
    if(!(isNaN(idUF))){
        uf = colecaoUf.find(item => item.id === idUF);
        if(!uf){
            mensagemErro = "UF não encontrada!";
        }
    }else{
        mensagemErro = "Requisição inválida!";
    }

    if (uf){
        res.json(uf);
    } else {
        res.status(404).send({"ERRO":mensagemErro});
    };
    
});

// ROTA 3 - Rota de busca, opcional em uma APi RESTful
