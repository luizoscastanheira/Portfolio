/**
 * 
 * João Papo-de-Pescador, homem de bem, comprou um microcomputador para 
 * controlar o rendimento diário de seu trabalho. 
 * Toda vez que ele traz um peso de peixes maior que o estabelecido pelo 
 * regulamento de pesca do estado de São Paulo (50 quilos) deve pagar 
 * uma multa de R$ 4,00 por quilo excedente. 
 * 
 * João precisa que você faça um  programa que leia a variável peso (peso de peixes) 
 * e calcule o excesso. 
 * 
 * Gravar na variável excesso a quantidade de quilos além do limite e 
 * na variável multa o valor da multa que João deverá pagar. 
 * 
 * Imprima os dados do programa com as mensagens adequadas.
 * 
 */

import entraDados from 'readline-sync';

console.log('*************** Os dados abaixo ****************');

let excesso = 0;
let multaKilo = 4.0;
let multa = 0;
let peso = parseFloat(entraDados.question('Digite em KG a quantidade de peixe pescado: '));

if(peso > 50){
    excesso = peso - 50;
};

if (excesso > 0){
    multa = excesso * multaKilo;
};


console.log(`Voce pescou ${peso}Kg de peixes.`);
console.log(`Teve ${excesso}KG de excesso.`);
console.log(`Deverá pagar um total de R$ ${multa.toFixed(2)} pelo ocorrido`);