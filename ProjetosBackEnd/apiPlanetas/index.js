import express from 'express'
const app = express();

const planetas = [
  { id: 1, nome: 'Mercúrio' },
  { id: 2, nome: 'Vênus' },
  { id: 3, nome: 'Terra' },
  { id: 4, nome: 'Marte' },
  { id: 5, nome: 'Júpiter' },
  { id: 6, nome: 'Saturno' },
  { id: 7, nome: 'Urano' },
  { id: 8, nome: 'Netuno' },
];

app.get("/planetas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const planeta = planetas.find(planeta => planeta.id === id);
  planeta ? res.json(planeta) : res.json({ erro: "Planeta não encontrado" });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});