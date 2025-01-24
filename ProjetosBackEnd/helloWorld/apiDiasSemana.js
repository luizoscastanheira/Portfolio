// Considerando a API que retorna a atividade do dia para o cliente, 
// qual das alternativas abaixo apresenta a implementação correta da 
// função 'atividadeDoDia()'?

const atividades = [
    { id: 1, dia: 'Domingo', atividade: 'Descansar', dificuldade: 'Baixa' },
    { id: 2, dia: 'Segunda-feira', atividade: 'Fazer exercícios físicos', dificuldade: 'Média' },
    { id: 3, dia: 'Terça-feira', atividade: 'Estudar programação', dificuldade: 'Alta' },
    { id: 4, dia: 'Quarta-feira', atividade: 'Fazer compras', dificuldade: 'Baixa' },
    { id: 5, dia: 'Quinta-feira', atividade: 'Lavar o carro', dificuldade: 'Baixa' },
    { id: 6, dia: 'Sexta-feira', atividade: 'Assistir a um filme', dificuldade: 'Baixa' },
    { id: 7, dia: 'Sábado', atividade: 'Sair com os amigos', dificuldade: 'Média' }
  ];
  
import express from 'express';
const app = express();

// função
function atividadeDoDia() {
    const diaAtual = new Date();
    const atividade = atividades.find(atividade => atividade.dia === diaAtual);
    return atividade;
  }


  app.get('/atividade/atividade-do-dia', (req, res) => {
    const atividade = atividadeDoDia();
    res.json(atividade)
  });