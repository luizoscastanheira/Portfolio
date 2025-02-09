/**
 * 
 * 12 - Tendo como dados de entrada a altura de uma pessoa, 
 * construa um algoritmo que calcule seu peso ideal, 
 * usando a seguinte fórmula: (72.7*altura) - 58
 * 
 */

import entraDados from 'readline-sync';

console.log('************* Insira seus dados abaixo ****************');
let altura = parseFloat(entraDados.question('Digite sua altura: '));

// Função para calcular - fórmula: (72.7*altura) - 58
const calculaPesoIdeal = (altura) => (72.7 * altura) - 58;
let resultado = calculaPesoIdeal(altura);

console.log(`Seu peso ideal é de ${resultado.toFixed(2)}KG`);