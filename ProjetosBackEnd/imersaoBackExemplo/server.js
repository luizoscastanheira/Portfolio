// Importando das dependências, no caso o Express
import express from "express";

// Importando nossa funçao de conexao ao banco
import conectarAoBanco from "./src/config/dbconfig.js";

//  Conectando ao banco e todos os dados da conexão atribuidos à variavel conexao
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
console.log(conexao) // verificar pois está com erro
//  Criando a constante que será referencia ao se trabalhar com o express
const app = express();
app.use(express.json()); // Indicando que o servidor deve usar json

// Levantando o server para que possa "ouvir em uma porta" do meu computador
app.listen(3000, ()=>{
    let dataAtual = new Date();
    console.log("Servidor Escutando..." + dataAtual);
});

// Criando uma "rota" para acesso a algum recurso do sevidor via URL

// funçao para acessar post do servidor
async function getTodosOsPosts(){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
};

// Rota para todos os posts
app.get("/posts", async (req,res) => {
    const resultadoPost = await getTodosOsPosts();
    res.status(200).json(resultadoPost);
});

//function buscarPostsPorID(id){
 //   return posts.findIndex((post)=>{
  //      return post.id === Number(id);
   // });
//};

//  Rota para posts individuais
//app.get("/posts/:id", (req,res) => {
//    const index = buscarPostsPorID(req.params.id);
//    res.status(200).json(posts[index]);
//});