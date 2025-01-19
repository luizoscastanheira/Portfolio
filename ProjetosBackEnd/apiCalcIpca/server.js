// API RESTful dados IPCA

// Importando as funções
import {buscarTodosDados, buscarPorAno, buscarPorId, reajustarPreco} from "./servico/servico.js";

// Preparando o Express
import express from 'express';
const app = express();
//app.use(express.json()); // Indicando que o servidor deve usar json

let data = new Date();

// Abrindo escuta no servidor
app.listen(3000, () => {
    console.log("Servidor Ativado em: " + data)
});

// Criando as rotas da API

// Rota Raiz - Indicando servidor ativo
app.get("/", (req,res) =>{
    res.json({"status":"Rodando"});
});

// Rota para lsitar todos os dados
app.get("/ipca", (req, res) => {
    res.json(buscarTodosDados());
});