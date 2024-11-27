/**
 * Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: 
 * 1 - o produto do dobro do primeiro com metade do segundo.
 * 2 - a soma do triplo do primeiro com o terceiro.
 * 3 - o terceiro elevado ao cubo.
 */

// Faça um Programa que peça 2 números inteiros e um número real.
import dados from 'readline-sync';

let numInt1 = parseInt(dados.question('Insira um numero do tipo Inteiro: '));
let numInt2 = parseInt(dados.question('Insira outro numero do tipo Inteiro :'));
let numFloat1 = Number(dados.questionFloat('Insira um numero do tipo Real: ').toFixed(2));

// 1 - o produto do dobro do primeiro com metade do segundo.
console.log('O produto do dobro do primeiro com metade do segundo é: ');
let resultado = (numInt1 * 2 ) * (numInt2 / 2);
console.log(resultado);

// 2 - a soma do triplo do primeiro com o terceiro.
console.log('A soma do triplo do primeiro com o terceiro é: ');
resultado = (numInt1 * 3) + numFloat1;
console.log(resultado);

// 3 - o terceiro elevado ao cubo.
console.log('O terceiro elevado ao cubo é: ')
resultado = numFloat1 ** 3;
console.log(resultado);