// Criando uma API - Camada REST -  para o Conversor de temperatura

// Importando a camada de serviço 
import { converteTemperatura } from "./conversor.js";

// Primeiro importando o servidor Express e criando sua instancia
import express from "express"; 
const server = express();

// Segundo - criando o acesso às funções do servidor

server.get('/', (req,res) => {
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;
    // usando a forma nova
    let temperaturaGraus = converteTemperatura(temperatura, conversor);
    
    let json = {temperatura: temperaturaGraus};

    res.json(json);
});

// Terceiro - abrindo uma porta de escuta para oservidor/api
server.listen(8080, ()=>{
    let data = new Date();
    console.log('Servidor ativado em: ' + data);
})