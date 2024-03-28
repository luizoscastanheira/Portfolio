/**
 * Projeto Jogo da Forca
 */

// Importando módulos para o jogo - arquivo de dados e de funções
import listaDeFrutas from "./dados/dados.js"; // Importando os dados
import { loopGame, palavraAleatoria, ocultarPalavra, atualizarPalavraOculta } from "./funcoes/funcoes.js"; // Importando as funções

// Importando o readline-sync
import entradaUser from 'readline-sync';

// Criando algumas variáveis globais


// Tela inicial do programa
console.clear();
console.log("--------------------- Jogo da Forca ------------------------");
console.log()

let nomeUser = entradaUser.question('Digite seu nome, por favor:  ');

console.log(`Bem-vindo ${nomeUser}, vamos começar nosso joguinho!`);
console.log();


// FUNÇAO que inicia o jogo.
function iniciarApp(){
    // Escolhendo uma fruta
    let frutaEscolhida = palavraAleatoria(listaDeFrutas);
   
    console.log(`Advinhe o nome da Fruta com ${frutaEscolhida.length} letras: `);
    console.log(frutaEscolhida);
    console.log();
    
    // O
    let palavraOculta = ocultarPalavra(frutaEscolhida);
    console.log(palavraOculta);
    console.log();
    
    //Perguntando as letras
    
    console.log(frutaEscolhida.length);

    for (let contador = 0; contador < frutaEscolhida.length -1; contador++){
        let letraDigitada = entradaUser.question('Digita uma letra: ');
        let testePalavra = atualizarPalavraOculta(palavraOculta, letraDigitada, frutaEscolhida);
        console.log(testePalavra);
    };
    
    
    



    //bloco teste
    //let letraDigitada = "e";
    //let testePalavra = atualizarPalavraOculta(palavraOculta, letraDigitada, frutaEscolhida);
    //console.log(testePalavra);
    
};

iniciarApp();



/*
// Programa de inicio
let escolha = entradaUser.question("Deseja Iniciar o programa?")
if (escolha == "S"){
    iniciarApp();
}else{
    console.log("OK, deixemos para outro dia.");
};
*/