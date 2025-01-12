// Importando funções

import {fatosHistoricos, numeros, palavras, dadosDeFuncionarios, listaDeProdutos, jogosExclusivos, listaProgramadores, listaCarros, listaSeries } from "./array_colecoes.js";

console.log(dadosDeFuncionarios);
console.log(listaDeProdutos);
console.log(numeros);
console.log(palavras);

// Testando a função .map

let listaNome = dadosDeFuncionarios.map(usuario => usuario.name);
console.log(listaNome);

let nomeProdutos =listaDeProdutos.map(produtos => produtos.nome);
console.log(nomeProdutos);

dadosDeFuncionarios.map((user) => {
    if (user.age >= 50 ){
        user.idoso = true
    }else{
        user.idoso = false
    }
});
console.log(dadosDeFuncionarios)

// Testando Filter

let driver = dadosDeFuncionarios.filter(driver => driver.driverLicence);
console.log(driver)

const buscaProgramadores = listaProgramadores.filter(programadores => programadores.linguagem === 'Ruby' );
console.log(buscaProgramadores);


// Filtrando carro do ano
let hoje = new Date();
let anoFab = hoje.getFullYear();
console.log('O ano atual é: ', anoFab)
const carroDoano = listaCarros.filter((carro) => carro.anoFabricacao === anoFab)
console.log(carroDoano)

// outra forma de construir a função acima
const carroAtual = () => {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    const carroAtual = listaCarros.filter((carro) => carro.anoFabricacao === anoAtual);
    return carroAtual;
}
console.log(carroAtual())


// testando acesso ao indice

let listaIndice = numeros.map((numero, indice) => {
    return `O intem ${numero} possui o indice ${indice}`;
})

console.log(listaIndice);


// Testando .filter

let xboxGames = jogosExclusivos.filter(
    (game) => game.plataforma === "xbox"
);
console.log(xboxGames);


// Usando uma funçao completa e não uma arrow function
function buscarNumerosPares (numero) {
    return numero % 2 === 0
}
const numerosPares = numeros.filter((numero) => buscarNumerosPares(numero));
//const numerosPares = numeros.filter((numero) => numero % 2 === 0); // aqui com arrow function
console.log(numerosPares)


const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const dataFormatada = `${dia}-${mes}-${ano}`;

//////////////////////////////////////

function calculaMedia(n1, n2, n3, n4)
{
    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
    return media;
}

//////////////////////////////////////

function retornaEditora(heroi)

{
    let editora = "";

    
if(heroi == "Superman")

    {
        editora = "DC";
    }
    
else if(heroi == "Hulk")

    {
        editora = "Marvel";
    }
    
else if(heroi == "Batman")

    {
        editora = "DC";
    }
    
else

    {
        editora = "Não identificada";
    }

    return editora;
}

console.log(retornaEditora("Batman"))
///////////////////////////////////////


// Retornando fato
let anoDesejado = '2020'
let encontrarFato = fatosHistoricos.find((fato) => fato.Ano === anoDesejado )
console.log(encontrarFato)
