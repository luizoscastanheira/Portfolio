import {fatosHistoricos, numeros, palavras, dadosDeFuncionarios, listaDeProdutos, jogosExclusivos, listaProgramadores, listaCarros, listaSeries, historicoInflacao } from "./array_colecoes.js";


//console.log(listaDeProdutos)
//console.log(historicoInflacao)

let produto = listaDeProdutos.filter(produto => {
   return produto.id >= 3 && produto.id <= 5
    
})
// Testando
//console.log(produto)

///////////////////////// TESTE para IPCA
/*
// Primeira versão de teste
let filtraHist = historicoInflacao.filter( (historico, index) => { 
    if (historico.ano >= 2017 && historico.ano <= 2021){ 
        return index 
    }; 
}); 
console.log(filtraHist);
*/


// Testando laços

//for (let hist of historicoInflacao){
//    console.log(hist)
//};


/// Testando a função para capturar APENAS o indice do objeto
let filtraHistorico = historicoInflacao.findIndex( (historico) =>  historico.ano === 2015 && historico.mes === 1);
//console.log(filtraHistorico)

////////
let indiceInicial = historicoInflacao.findIndex(historico => historico.ano === 2020 && historico.mes === 1)
let indiceFinal = historicoInflacao.findIndex(historico => historico.ano === 2020 && historico.mes === 3)
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
console.log(selecionaColecao.length)

////////////////////////
function reajustarValor(valor, mesInicial, anoInicial, mesFinal, anoFinal){
    
    
    //console.log(`${valor}...${mesInicial}...${anoInicial}...${mesFinal}...${anoFinal}`)
};
// Testando
reajustarValor(100,1,2015,1,2016)

/*
    Para realizar o reajuste sobre o valor fornecido pelo cliente, 
    é necessário seguir esta expressão:

    resultado = valor * ((1 + (ipca1/100)) * (1 + (ipca2/100)) * (1 + (ipcaN/100)))
 */
// Teste da Fórmula
let resultado = 100 * ((1 + (1.24/100)) * (1 + (1.22/100)) * (1 + (1.32/100)))
console.log(resultado.toFixed(2))


let valorInicial = 100;
let calcMesMes = [];

for (let item of selecionaColecao){
    let calc = 1 + (item.ipca / 100);
    calcMesMes.push(calc);
    console.log(calc);
};

console.log(calcMesMes);

// Testando o reduce para somar todo array
const totalParcial = calcMesMes.reduce( (acumulador, numeroAtual) =>{
    return acumulador * numeroAtual
} );

console.log(totalParcial)
let valorFinal = valorInicial * totalParcial
console.log(valorFinal.toFixed(2))


////////////////////

function transformarFrase(frase) {
    let palavras = frase.split(' ');
    let novaFrase = '';
  
    for (let palavra of palavras) {
         if (novaFrase !== '') {
             novaFrase += ' ';
         }
         novaFrase += palavra[0].toUpperCase() + palavra.slice(1);
    }
    return novaFrase;
  }
  
  console.log(transformarFrase("o rato roeu a roupa do rei de roma"));

  /////

  const livros = [
    {titulo: 'Fundação', autor: 'Isaac Asimov', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'Neuromancer', autor: 'William Gibson', genero: 'Cyberpunk', categoria: 2},
    {titulo: 'Duna', autor: 'Frank Herbert', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'A Máquina do Tempo', autor: 'H.G. Wells', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'Snow Crash', autor: 'Neal Stephenson', genero: 'Cyberpunk', categoria: 2},
    {titulo: '2001: Uma Odisseia no Espaço', autor: 'Arthur C. Clarke', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'Nevasca', autor: 'Neal Stephenson', genero: 'Ficção Histórica', categoria: 3},
    {titulo: 'Eu, Robô', autor: 'Isaac Asimov', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'Blade Runner', autor: 'Philip K. Dick', genero: 'Ficção Científica', categoria: 1},
    {titulo: 'Jogador Número 1', autor: 'Ernest Cline', genero: 'Ficção Científica', categoria: 1}
  ];

const buscaLivros = livros.filter((livro) => livro.categoria === 1);
console.log(buscaLivros)

const buscarLivrosCategoria = ( livros ) => { livros.filter( livro => livro.categoria === 2) ; }
console.log(buscarLivrosCategoria(livros))