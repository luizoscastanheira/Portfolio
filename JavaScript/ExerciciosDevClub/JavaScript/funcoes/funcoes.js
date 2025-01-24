// Função VOID - sem parametros e sem retorno
function incrementarValor() {
    let valor = 10;
    valor = valor + 20;
    console.log(valor)
};
// Chamando a Função
incrementarValor();

// Função com Parametros - e sem retorno
function somarDois(n1, n2){
    let resultado = n1 + n2;
    console.log(resultado);
};
// Chamando a Função
somarDois(45, 67);

// Função com retorno - return
function multiplica(n1, n2){
    let resultado = n1 * n2;
    return resultado;
};
// Chamando a função
let resultMult = multiplica(10,100);
console.log(resultMult);

// Função seta - Arrow Function
const multi = (n1, n2) => {
    let resultado = n1 * n2;
    return resultado;
};
// Chamando a Função
let multiplicaArrow = multi(23, 50);
console.log(multiplicaArrow);

// Função set - abreviando em uma linha
const multiArrow = (n1, n2) => n1 * n2;
// Chamando a Função
let multAbreviado = multiArrow(5, 6);
console.log(multAbreviado);

const testeNome = (nome) => console.log(nome);
// Chamando a função
testeNome("Rosicléia");
