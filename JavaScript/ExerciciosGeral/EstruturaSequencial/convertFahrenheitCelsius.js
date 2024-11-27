/**
 *  Faça um Programa que peça a temperatura em graus Fahrenheit, 
 *  transforme e mostre a temperatura em graus Celsius.
 *  C = 5 * ((F-32) / 9).
 */

// Faça um Programa que peça a temperatura em graus Fahrenheit

import dados from 'readline-sync';

let tempFar = Number(dados.question('Insira a temperatura em Graus Farenheit: '));

// Transforme e mostre a temperatura em graus Celsius.
let tempCel = 5 * ((tempFar - 32) / 9)
console.log(`Conversão: ${tempFar} graus Farenheit correspodem a ${tempCel.toFixed(2)} graus Celsius.`);