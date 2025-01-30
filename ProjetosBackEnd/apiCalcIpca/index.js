/**
 * 
 *                        API RESTful dados histórico de IPCA 
 * 
 */ 
// Versão operacional com pesquisa em parametros 

// Importando as funções
import {buscarTodosDados, buscarPorAno, buscarPorId, reajustarValor} from "./servico/servico.js";

// Preparando o Express
import express from 'express';
const app = express();
app.use(express.json()); // Indicando que o servidor deve usar json

let data = new Date();

// Abrindo escuta no servidor
app.listen(3000, () => {
    console.log("Servidor Ativado em: " + data)
});

////////////////////// Criando as rotas da API /////////////////////////
// Rota - para gerar calculo
app.get("/historicoIPCA/calculo", (req,res) =>{
    let valor = parseFloat(req.query.valor);
    let mesInicial = parseInt(req.query.mesInicial);
    let anoInicial = parseInt(req.query.anoInicial);
    let mesFinal = parseInt(req.query.mesFinal);
    let anoFinal = parseInt(req.query.anoFinal);
    // Tratando erro
    if(isNaN(valor) || isNaN(mesInicial) || isNaN(anoInicial) || isNaN(mesFinal) || isNaN(anoFinal)){
        res.send("Algum valor digitado é inválido, tente novamente")
    } else {
        let resultado = reajustarValor(valor, mesInicial, anoInicial, mesFinal, anoFinal);
        res.json({resultado:resultado});
    };
});

// Rota - para buscar dados por ID
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

// Rota - para listar todos os dados
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

// Rota  - Raiz - Indicando servidor ativo
app.get("/", (req,res) =>{
    res.json({"status":"Servidor IPCA Rodando"});
});