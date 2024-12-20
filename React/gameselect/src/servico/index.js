// Arquivo da camada de serviços

import { jogosExclusivos } from "../dados/jogos.js";

// Função que retorna a coleção de jogos
export const retornarJogos = () => {
  return jogosExclusivos;
};

// Função que busca os jogos pelo nome ou plataforma
export const buscarJogo = (textoDigitado) => {
  return jogosExclusivos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};

// Função que filtra os jogos por plataforma
export const filtrarJogo = (plataforma) => {
  return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
};