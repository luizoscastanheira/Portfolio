// API RESTful dados IPCA

// Segunda versão operacional mas com pesquisa em parametros 

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

// Rota1 - Raiz - Indicando servidor ativo
app.get("/", (req,res) =>{
    res.json({"status":"Servidor IPCA Rodando"});
});

// Rota 2 - para listar todos os dados
app.get("/historicoIPCA", (req, res) => {
    let ano = req.query.ano;
    let testaAno = isNaN(ano);
    let buscaAno = buscarPorAno(Number(ano));
        
    // Tratando Erro
    if(!ano){
        res.json(buscarTodosDados())
    } else if (testaAno === true  || ano < 2015 || ano > 2023 ){
        res.status(404).json({mensagem:"Ano não encontrado ou Inválido!"})
    } else {
        res.json(buscaAno);
    };
            
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

