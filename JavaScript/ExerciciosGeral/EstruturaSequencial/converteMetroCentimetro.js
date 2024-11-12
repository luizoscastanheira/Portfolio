/**
 *  Programa 5 - Conversor de medida
 */
// Faça um Programa que converta metros para centímetros.
import entradaDados from 'readline-sync';

let metros = parseFloat(entradaDados.question('Insira a medida em metros: '));

let centimetros = metros * 100;

console.log('O numero digita em metros corresponde a ', centimetros, 'centimetros.');