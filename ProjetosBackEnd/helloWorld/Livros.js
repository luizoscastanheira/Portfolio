/Imagine que você esteja desenvolvendo uma API para um sistema de biblioteca. Complete o código abaixo, de forma que a rota permita uma busca de um livro através do seu título.

/OBS: Utilize o método filter.


import express from 'express';
const app = express();

const livros = [
  { id: 1, titulo: 'Livro 1', autor: 'Autor A', ano: 2020 },
  { id: 2, titulo: 'Livro 2', autor: 'Autor B', ano: 2019 },
  { id: 3, titulo: 'Livro 3', autor: 'Autor A', ano: 2021 },
  { id: 4, titulo: 'Livro 4', autor: 'Autor C', ano: 2022 },
  { id: 5, titulo: 'Livro 5', autor: 'Autor B', ano: 2023 }
];

app.get('/livros', (req, res) => {
  const tituloLivro = req.query.titulo;
  const livroEncontrado = livros.filter(livro => livro.titulo === tituloLivro);
  res.json(livroEncontrado);
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');