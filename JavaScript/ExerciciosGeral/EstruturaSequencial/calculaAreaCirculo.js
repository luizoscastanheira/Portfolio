/**
 *  Programa 6 - Calcula Area do Circulo
 */
// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área
import entradaDados from 'readline-sync';

let raio = parseFloat(entradaDados.question('Informe o raio do circulo: '));

let area = 3.14159 * (raio ** 2);

console.log('A área do circulo é: ', area);