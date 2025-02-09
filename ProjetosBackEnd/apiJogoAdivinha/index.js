const respostasJogoAdivinhacao = [
    { id: 1, resposta: "Você é um vencedor! Adivinhou corretamente." },
    { id: 2, resposta: "Bom trabalho! Você acertou." },
    { id: 3, resposta: "Parabéns! Essa foi a escolha certa." },
    { id: 4, resposta: "Está correto! Você acertou em cheio." },
    { id: 5, resposta: "Isso mesmo! Sua intuição está afiada." },
    { id: 6, resposta: "Você é um gênio! Acertou em cheio." },
    { id: 7, resposta: "Incrível! Você descobriu a resposta." },
    { id: 8, resposta: "Impressionante! Sua adivinhação está certa." },
    { id: 9, resposta: "Correto! Adivinhou como um profissional." },
    { id: 10, resposta: "Fantástico! Essa foi a escolha certa." },
    { id: 11, resposta: "Certo como sempre! Você acertou." },
    { id: 12, resposta: "Você é um adivinho talentoso! Acertou." },
    { id: 13, resposta: "Muito bem! Sua adivinhação está certa." },
    { id: 14, resposta: "Acertou em cheio! Essa é a resposta." }
  ];
  
  function obterRespostaAdivinhacao() {
    const indiceAleatorio = Math.floor(Math.random() * respostasJogoAdivinhacao.length);
    return respostasJogoAdivinhacao[indiceAleatorio].resposta;
  }
  
  app.get('/jogo-adivinhacao/resposta', (req, res) => {
    const respostaAdivinhacao =   obterRespostaAdivinhacao() ;
    
  res.json  ({ resposta:   respostaAdivinhacao   });
  });
  
  app.listen(3000, () => {
    console.log('API do Jogo de Adivinhação iniciada na porta 3000');
  });