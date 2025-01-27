import {fatosHistoricos, numeros, palavras, dadosDeFuncionarios, listaDeProdutos, jogosExclusivos, listaProgramadores, listaCarros, listaSeries, historicoInflacao } from "./array_colecoes.js";


//console.log(listaDeProdutos)
//console.log(historicoInflacao)

let produto = listaDeProdutos.filter(produto => {
   return produto.id >= 3 && produto.id <= 5
    
})
// Testando
//console.log(produto)

///////////////////////// TESTE para IPCA

let filtraHist = historicoInflacao.filter( (historico, index) => { 
    if (historico.ano >= 2017 && historico.ano <= 2021){ 
        return index 
    }; 
}); 
console.log(filtraHist);

/// Testando a função para capturar APENAS o indice do objeto
let filtraHistorico = historicoInflacao.findIndex( (historico) =>  historico.ano === 2015 && historico.mes === 1);
//console.log(filtraHistorico)

////////
let indiceInicial = historicoInflacao.findIndex(historico => historico.ano === 2019 && historico.mes === 10)
let indiceFinal = historicoInflacao.findIndex(historico => historico.ano === 2020 && historico.mes === 12)
console.log(indiceInicial)
console.log(indiceFinal)
console.log(historicoInflacao[indiceInicial])
console.log(historicoInflacao[indiceFinal])

/*
Teste o slice

const subColecao = colecao.slice(4, 9);
console.log(subColecao);

*/

let selecionaColecao = historicoInflacao.slice(indiceInicial, indiceFinal+1)
console.log(selecionaColecao)


////////////////////////
function reajustarValor(valor, mesInicial, anoInicial, mesFinal, anoFinal){
    
    
    //console.log(`${valor}...${mesInicial}...${anoInicial}...${mesFinal}...${anoFinal}`)
};
// Testando
reajustarValor(100,3,2015,5,2020)
