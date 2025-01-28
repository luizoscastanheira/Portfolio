////////////////// Camada de Serviço com as funções

import historicoInflacao from "../dados/dbDados.js";

// 1 - Buscando todos do dados da coleção
const buscarTodosDados = () => {
    return historicoInflacao;
};
// Testando //console.log(buscarTodosDados());

// 2 - Buscando os dados por Ano
const buscarPorAno = (ano) => {
    let resultado = historicoInflacao.filter(objeto => objeto.ano === ano);
    return resultado;
};
// Testando //console.log(buscarPorAno(2015));

// 3 - Buscando os dados por um ID
const buscarPorId = (id) => {
    let resultado = historicoInflacao.find(objeto => objeto.id === id)
    return resultado;
};
// Testando //console.log(buscarPorId(34));

// 4 - Calculando o reajuste de preço após passado um parâmetro
/*
Para realizar o reajuste sobre o valor fornecido pelo cliente, 
é necessário seguir esta expressão:
resultado = valor * ((1 + (ipca1/100)) * (1 + (ipca2/100)) * (1 + (ipcaN/100)))
Por exemplo, suponhamos que o cálculo é um valor entre janeiro/2015 (IPCA = 1,24) e março/2015 (IPCA= 1,32) sobre um valor de R$100,00.

Dados de IPCA do período:
Janeiro 2015 = 1.24
Fevereiro 2015 = 1.22
Março 2015 = 1.32

Exemplo de cálculo: resultado = 100 * ((1 + (1,24/100)) * (1 + (1,22/100)) * (1 + (1,32/100)))
resultado = R$103,83
*/

// Função para reajuste de valor
function reajustarValor(valor, mesInicial, anoInicial, mesFinal, anoFinal){
    // Inicializando a variável
    let valorInicial = valor;
    // Capturando as posições de inicio e fim necessárias do array
    let indiceInicial = historicoInflacao.findIndex(historico => historico.ano === anoInicial && historico.mes === mesInicial)
    let indiceFinal = historicoInflacao.findIndex(historico => historico.ano === anoFinal && historico.mes === mesFinal)
    // Separando, fatiando a parte necessária do array baseado nos indices inicial e final    
    let selecionaColecao = historicoInflacao.slice(indiceInicial, indiceFinal+1)
    ///// Executando os cálculos necessários
    let calcMesMes = [];
    for (let item of selecionaColecao){
        let calc = 1 + (item.ipca / 100);
        calcMesMes.push(calc);
    };
    // Testando o reduce para somar todo array
    const totalParcial = calcMesMes.reduce( (acumulador, numeroAtual) =>{
        return acumulador * numeroAtual;
    } );
    // Variável com valor final
    let valorFinal = valorInicial * totalParcial;
    // Retorno da inforamação solicitada
        return valorFinal.toFixed(2);
};

// Exportando as funções
export {buscarTodosDados, buscarPorAno, buscarPorId, reajustarValor};