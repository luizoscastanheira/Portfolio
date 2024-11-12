/**
 *  Programa 2 - Informar Numero
 */
// Faça um Programa que peça um número e então mostre a mensagem 
// O número informado foi [número].

import entradaDados from 'readline-sync';

let numero = entradaDados.question('Digite um numero: ');

console.log('O Numero digitado foi', numero);