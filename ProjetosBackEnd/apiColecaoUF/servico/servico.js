// Camada de Serviço da Aplicação

// Importando coleção para uso
import  colecaoUf  from '../dados/dbDados.js';

// Retorna toda a coleção
const buscarUfs = () => {
  return colecaoUf;
};

// Retorna uma busca por nome
const buscarUfsPorNome = (nomeUf) => {
  return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

// Retorna uma busca pelo id
const buscarUfPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUF);
};

// Exportando as funções
export {buscarUfs, buscarUfsPorNome, buscarUfPorId};