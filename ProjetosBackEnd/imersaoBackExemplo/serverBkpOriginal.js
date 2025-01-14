// Importando das dependências, no caso o Express
import express from "express";

// Criando a constante que será referencia ao se trabalhar com o express
const app = express();

// Levantando o server para que possa "ouvir em uma porta" do meu computador
app.listen(8080, ()=>{
    let dataAtual = new Date();
    console.log("Servidor Escutando..." + dataAtual);
});

// Criando uma "rota" para acesso a algum recurso do sevidor via URL
app.get("/api", (req,res) => {
    res.status(200).send("Teste de Rota inicial, Bem Vindo!");
});