/**
 *  Programa de Cálculo de Salário
 */

// Faça um Programa que pergunte quanto você ganha por hora e o número de 
// horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês.

import entrada from 'readline-sync';

let valorHora = Number(entrada.question('Quanto voce ganha por hora? '))
let horasTrabalhadas = Number(entrada.question('Quantas horas voce trabalha por mes? '))

let salarioTotal = valorHora * horasTrabalhadas

console.log('Seu salário é de:', salarioTotal.toFixed(2), 'reais por mes.')
