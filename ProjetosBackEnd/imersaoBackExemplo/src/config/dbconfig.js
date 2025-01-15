// Criando a conexão com o mongoDB
// Quem define como fazer isso é a documentação do mongo

import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao Cluster do Bando de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');
    } catch(erro){
        console.error('Falha na conexão com o Banco!', erro);
        process.exit();
    };
};