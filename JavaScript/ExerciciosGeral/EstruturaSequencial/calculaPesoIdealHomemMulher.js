/**
 * Tendo como dado de entrada a altura (h) de uma pessoa,  construa um algoritmo que 
 * calcule seu peso ideal, utilizando as seguintes fórmulas:
 * Para homens: (72.7*h) - 58
 * Para mulheres: (62.1*h) - 44.7
 */
import entraDados from 'readline-sync';

console.log('************* Insira seus dados abaixo ****************');

let altura = parseFloat(entraDados.question('Digite sua altura: '));
let sexo = entraDados.question('Digite M para Mulher ou H para homem: ').toUpperCase();

// Calculando
const calculaPesoIdeal = () => {
    if(sexo === 'H'){
        return (72.7 * altura) - 58;
    } else {
        return (62.1 * altura) - 44.7;
    };
};

console.log('Seu peso ideal é de: ' + calculaPesoIdeal().toFixed(2) + ' KG.');