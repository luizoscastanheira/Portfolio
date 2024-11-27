/**
 *  Programa Área do Quadrado
 */

// Faça um Programa que calcule a área de um quadrado, 
// em seguida mostre o dobro desta área para o usuário.

import entradaDados from 'readline-sync';

let base = parseFloat(entradaDados.question('Informe a base do quadrado em metro: '));
let altura = parseFloat(entradaDados.question('Informe a altura do quadrado em metro: '));

console.log('----------------------------------------');
let area = base * altura
let dobroArea = area *2


console.log(`A area do quadrado é de ${area} metros quadrados.`)
console.log('----------------------------------------');
console.log(`O dobro disso é de ${dobroArea} metros quadrados.`)