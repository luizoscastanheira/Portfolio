/* Esta é uma aplicação teste para cálculo de juros */
/* Importando plugin para entrada de ados pelo usuário*/
import entrada from 'readline-sync';

console.log("*************************************************************");
console.log("**                 Calculadora de Juros                    **")
console.log("*************************************************************");

/* Definindo as variáveis de entrada de dados pelo usuário */
let valorDivida = entrada.question("Por favor, informe o valor da Dívida: ");
let diasAtraso = entrada.question("Por favor, informe os dias de atraso: ");
/* Definindo as taxas de Juros */
let jurosDez = 10;
let jurosCinco = 5;

/* Informando ao usário o que ele digitou */
console.log("*************************************************************");
console.log("O valor da original da dívida: " + valorDivida);
console.log("Os dias de atraso: " + diasAtraso);

/**
 * Aqui vamos implementar os cálculos
*/
let valorJuros = (valorDivida / 100) * jurosDez;
let valorDividaAtualizado = Number(valorDivida) + Number(valorJuros);





/* Informe dos juros a serem aplicados */
console.log("***********        Atualizando Valores       ****************");
console.log("Taxa de Juros: " + jurosDez + "%.");
console.log("Valor atualizado da dívida com juros: R$ "+valorDividaAtualizado+".");

