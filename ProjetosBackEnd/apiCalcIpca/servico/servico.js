// Camada de Serviço com as funções

import historicoInflacao from "../dados/dbDados.js";

// 1 - Buscando todos do dados da coleção
const buscarTodosDados = () => {
    return historicoInflacao;
};
// Testando
console.log(buscarTodosDados());

// 2 - Buscando os dados por Ano
const buscarPorAno = (ano) => {
    let resultado = historicoInflacao.filter(objeto => objeto.ano === ano);
    return resultado;
};
// Testando
console.log(buscarPorAno(2019));

// 3 - Buscando os dados por um ID
const buscarPorId = (id) => {
    let resultado = historicoInflacao.find(objeto => objeto.id === id)
    return resultado;
};

// Testando
console.log(buscarPorId(60));

// 4 - Calculando o reajuste de preço após passado um parâmetro
function reajustarPreco(){

};

// Exportando as funções
export {buscarTodosDados, buscarPorAno, buscarPorId, reajustarPreco};