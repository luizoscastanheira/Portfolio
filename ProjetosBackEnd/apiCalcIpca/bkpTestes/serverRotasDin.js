// API RESTful dados IPCA

// Primeira Versão operacional com 4 rotas

// Importando as funções
import {buscarTodosDados, buscarPorAno, buscarPorId, reajustarPreco} from "./servico/servico.js";

// Preparando o Express
import express from 'express';
const app = express();
app.use(express.json()); // Indicando que o servidor deve usar json

let data = new Date();

// Abrindo escuta no servidor
app.listen(3000, () => {
    console.log("Servidor Ativado em: " + data)
});

// Criando as rotas da API

// Rota 1 - Raiz - Indicando servidor ativo
app.get("/", (req,res) =>{
    res.json({"status":"Rodando"});
});

// Rota 2 - para listar todos os dados
app.get("/historicoIPCA", (req, res) => {
    res.json(buscarTodosDados());
});

// Rota 3 - para buscar dados por ID
app.get("/historicoIPCA/:id", (req,res) => {
    let id = Number(req.params.id);
    let buscaID = buscarPorId(id);
    // Tratando erro
    if(isNaN(id)){
        res.status(404).send('Requisição inválida ou Rota não encontrada!')
    }else if(id < 1 || id > 101){
        res.status(404).send('ID não encontrado, tente novamente.');
    }else{
        res.json(buscaID);
    };
});

// Rota 4 - para buscar dados por Ano
app.get("/ano/:ano", (req,res) => {
    let ano = Number(req.params.ano);
    let buscaAno = buscarPorAno(ano);
    // Tratando erro
    if(isNaN(ano)){
        res.status(404).send('Requisição inválida ou Rota não encontrada!')
    }else if (buscaAno < 2015 || buscaAno > 2023){
        res.status(404).send('Ano não encontrado, digite novamente.');
    }else{
        res.json(buscaAno);
    };
});

