/**
 *  Programa 4 - Média Escolar
 */
// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
import entradaDados from 'readline-sync';
// Solicitando as entradas de dados
let nota1 = parseFloat(entradaDados.question('Insira a nora do Bim 1: '));
let nota2 = parseFloat(entradaDados.question('Insira a nota do Bim 2: '));
let nota3 = parseFloat(entradaDados.question('Insira a nota do Bim 3: '));
let nota4 = parseFloat(entradaDados.question('Insira a nota do Bim 4: '));

// Calculando a média
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(typeof(media)) // mostra a variavel como um number
console.log('A média final é: ', media);
console.log(typeof(media.toFixed(2))) // mostra a variável como uma string
