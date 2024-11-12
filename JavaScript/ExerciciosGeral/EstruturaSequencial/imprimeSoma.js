/**
 *  Programa 3 - Immpre a Soma
 */
// Faça um Programa que peça dois números e imprima a soma.

import entradaDados from 'readline-sync';

let num1 = parseFloat(entradaDados.question('Insira o primeiro numero: '));
let num2 = parseFloat(entradaDados.question('Insira o segundo numero: '));

let resultado = num1 + num2;
// Ajusta para 2 casas decimais - A formatação aqui é uma string, não um número.
let resultadoFormatado = resultado.toFixed(2); 

console.log('O resultado da soma dos numeros dados é: ',resultadoFormatado)

