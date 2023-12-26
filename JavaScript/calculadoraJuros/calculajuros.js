/* Esta é uma aplicação teste para cálculo de juros */
/* Importando plugin para entrada de ados pelo usuário*/
import entrada from 'readline-sync';

// Limpando o console antes executar
console.clear();

console.log("*************************************************************");
console.log("**                 Calculadora de Juros                    **")
console.log("*************************************************************");
console.log("*****          Desenvolvida por - Luiz Otávio           *****");
console.log("*************************************************************");
/* Definindo as variáveis de entrada de dados pelo usuário */
let divida = entrada.question("Por favor, informe o valor da Dívida: ");
let valorDivida = Number(divida);
let taxaJuros = 0;

if (valorDivida <= 0){
    console.log("*************************************************************");
    console.log("*    A Dívida não pode ter valor zero - Fim da Aplicação    *");
    console.log("*************************************************************");
}else{
    console.log("Continuando...");
    console.log("*************************************************************");
    let atraso = entrada.question("Informe os dias de atraso: ");
    let diasAtraso = Number(atraso);
    if(diasAtraso >=1 && diasAtraso <= 15){
        taxaJuros = 5;
        let valorJuros = (valorDivida / 100) * Number(taxaJuros);
        let valorDividaAtualizado = Number(valorDivida) + valorJuros;
        console.log("*************************************************************");
        console.log("Taxa de Juros em 5% devido a "+diasAtraso+" dias de atraso.");
        console.log("Valor atualizado da dívida é de: R$"+valorDividaAtualizado+".");
        console.log("*************************************************************");
    }else if(diasAtraso > 15){
        taxaJuros = 10;
        let valorJuros = (valorDivida / 100) * taxaJuros;
        let valorDividaAtualizado = Number(valorDivida) + Number(valorJuros);
        console.log("*************************************************************");
        console.log("Taxa de Juros em 10% devido a "+diasAtraso+" dias de atraso.");
        console.log("Valor atualizado da dívida é de: R$"+valorDividaAtualizado+".");
        console.log("*************************************************************");
    }else{
        console.log("*************************************************************");
        console.log("*        Sua dívida não está em atraso - Obrigado!          *");
        console.log("*************************************************************");
    }
}