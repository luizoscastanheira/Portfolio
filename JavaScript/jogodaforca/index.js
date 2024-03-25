/**
 * Projeto Jogo da Forca
 */

// Importando módulos para o jogo - arquivo de dados e de funções
import listaDeFrutas from "./dados/dados.js"; // Importando os dados
import { iniciarApp, loopGame } from "./funcoes/funcoes.js"; // Importando as funções

// Importando o readline-sync
import entradaUser from 'readline-sync';


// Descomente abaixo se quiser testar

/*
for (let dados of listaDeFrutas){
    console.log(dados);
};
*/

iniciarApp();



