/**
 *  Faça um Programa que peça a temperatura em graus Celsius, 
 *  transforme e mostre em graus Fahrenheit.
 */

// Faça um Programa que peça a temperatura em graus Celsius, 
import dados from 'readline-sync';

let tempCel = Number(dados.question('Insira a temperatua em graus Celsius: '));

// Transforme e mostre em graus Fahrenheit.
let tempFah = (tempCel * (1.8)) + 32;

console.log(`Resultado: A temperatura de ${tempCel} celsius corresponde a ${tempFah.toFixed(2)}`);