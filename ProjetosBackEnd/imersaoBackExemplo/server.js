// Importando das dependências, no caso o Express
import express from "express";

// Indo mais além, agora vamos criar uma base de ados local com ARRAY
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
    {
        "id": 6,
        "descricao": "Foto Teste 6", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 7,
        "descricao": "Foto Teste 7", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 8,
        "descricao": "Foto Teste 8", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 9,
        "descricao": "Foto Teste 9", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 10,
        "descricao": "Foto Teste 10", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 11,
        "descricao": "Foto Teste 11", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 12,
        "descricao": "Foto Teste 12", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 13,
        "descricao": "Foto Teste 13", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 14,
        "descricao": "Foto Teste 14", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 15,
        "descricao": "Foto Teste 15", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 16,
        "descricao": "Foto Teste 16", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 17,
        "descricao": "Foto Teste 17", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 18,
        "descricao": "Foto Teste 18", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 19,
        "descricao": "Foto Teste 19", 
        "imagem": "https://placecats.com/millie/300/150"
    },
    {
        "id": 20,
        "descricao": "Foto Teste 20", 
        "imagem": "https://placecats.com/millie/300/150"
    }
];


// Criando a constante que será referencia ao se trabalhar com o express
const app = express();
app.use(express.json()); // Indicando que o servidor deve usar json

// Levantando o server para que possa "ouvir em uma porta" do meu computador
app.listen(8080, ()=>{
    let dataAtual = new Date();
    console.log("Servidor Escutando..." + dataAtual);
});

// Criando uma "rota" para acesso a algum recurso do sevidor via URL

// Rota para todos os posts
app.get("/posts", (req,res) => {
    res.status(200).json(posts);
});

function buscarPostsPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
};

// Rota para posts individuais
app.get("/posts/:id", (req,res) => {
    const index = buscarPostsPorID(req.params.id);
    res.status(200).json(posts[index]);
});