import express from 'express';
const app = express();

const filmes = [
    { 'titulo': 'Filme 1', 'genero': 'terror' },
    { 'titulo': 'Filme 2', 'genero': 'doc' },
    { 'titulo': 'Filme 3', 'genero': 'drama' },
    { 'titulo': 'Filme 4', 'genero': 'aventura' },
    { 'titulo': 'Filme 5', 'genero': 'suspense' }
];

app.get('/filmes', (req, res) => {
    const generoFilme = req.query.genero;
    const filmesPorGenero = filmes.filter(filme => filme.genero === generoFilme);
    res.send(filmesPorGenero);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});