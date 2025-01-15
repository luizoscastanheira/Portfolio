// 1 - Importando das dependências, no caso o Express
import express from "express";

// 6 - Indo mais além, agora vamos criar uma base de ados local com ARRAY
const posts = [
    {
        "id": 1,
        "descricao": "Foto Teste 1", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 2,
        "descricao": "Foto Teste 2", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 3,
        "descricao": "Foto Teste 3", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 4,
        "descricao": "Foto Teste 4", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 5,
        "descricao": "Foto Teste 5", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    
];


// 2 - Criando a constante que será referencia ao se trabalhar com o express
const app = express();
app.use(express.json()); // Indicando que o servidor deve usar json

// 3 - Levantando o server para que possa "ouvir em uma porta" do meu computador
app.listen(8080, ()=>{
    let dataAtual = new Date();
    console.log("Servidor Escutando..." + dataAtual);
});

// 4 - Criando uma "rota" para acesso a algum recurso do sevidor via URL

// Rota para todos os posts
app.get("/posts", (req,res) => {
    res.status(200).json(posts);
});

function buscarPostsPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
};

// 5 - Rota para posts individuais
app.get("/posts/:id", (req,res) => {
    const index = buscarPostsPorID(req.params.id);
    res.status(200).json(posts[index]);
});