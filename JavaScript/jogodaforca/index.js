/**
 * Projeto Jogo da Forca
 */

// Importando módulos para o jogo - arquivo de dados e de funções
import listaDeFrutas from "./dados/dados.js"; // Importando os dados
import { palavraAleatoria, ocultarPalavra, atualizarPalavraOculta } from "./funcoes/funcoes.js"; // Importando as funções

// Importando o readline-sync
import entradaUser from 'readline-sync';

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
    console.log();
    
    // Ocultando a palavra escolhida
    let palavraOculta = ocultarPalavra(frutaEscolhida);
    console.log();

    /**
     * Criando uma variável auxiliar para trabalhar na função que atualiza
     * a palavra oculta.
     */
    let palavraEscondida = palavraOculta;
    console.log(palavraEscondida);
    
    // Variável para contar o número de erros
    let contaErro = 4;
 
    // Laço principal para verificar as letras e contar erros
    while (contaErro > 0){
               
        // Perguntando uma letra
        let letraDigitada = entradaUser.question('Digita uma letra: ');
        let testePalavra = atualizarPalavraOculta(palavraEscondida, letraDigitada, frutaEscolhida);
        console.log(testePalavra);
        //palavraEscondida = testePalavra; // atualizando a variável fora do laço
        
        // Testando a palavra e atualizando conforme o caso
        if (testePalavra != palavraEscondida){
            palavraEscondida = testePalavra; // atualizando a variável fora do laço
            if(palavraEscondida == frutaEscolhida){
                console.log();
                console.log('Sucesso! Você conseguiu acertar a palavra, PARABENS!!!');
                console.log('A palavra descoberta foi *** ' + frutaEscolhida + ' *** !!!');
                console.log();
                break;
            };
        }else{
            contaErro--;
            if (contaErro == 0){
                console.log('Infelizmente você perdeu todas a chances!');
            }else{
                console.log(`você errou ou repetiu letra, tem mais ${contaErro} tentativas.`);
            };
 
        };

    };
     
    // Repetindo o jogo caso o usuário deseje.
    let repetirGame = entradaUser.question('Deseja jogar novamente? Digite S ou N: ');
    let escolha = repetirGame.toLocaleUpperCase();
    if(escolha== 'S' ){
        iniciarApp();
    };

};

iniciarApp();

console.clear();
console.log();
console.log('***********************************************************');
console.log('**                     FIM DE JOGO!                      **');
console.log('***********************************************************');
console.log();
console.log();
console.log ('Obrigado por jogar! Volte quando quiser.');