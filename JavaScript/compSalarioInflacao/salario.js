/**
 * Aplicação para exibir o salário mínimo, inflação do IPCA entres os anos de 
 * 2010 a 2020, além do percentual de crescimento salarial
*/
// Importando o readline-sync para usar nos inputs
import dados from 'readline-sync';

//limpando o terminal a cada execução
console.clear();

// Definindo a Tela de Abertura
console.log("*********************************************************");
console.log("*                                                       *");
console.log("*                Salário  X  Inflação                   *");
console.log("*                                                       *");
console.log("*********************************************************");

// Definindo a Coleção de Dados a ser usada
let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacaoIpca = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]
// Fim da coleção

// Definindo variáveis
let escolha = 0;

// Criando um menu de opções
console.log("Seja bem-vindo ao sistema!");
console.log("Escolha uma das alternativas:");
console.log("-------------------------------------------------------");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 20210 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log();

// Implementando o input do Menu
let opcao = dados.question("Digite o número da opção de sua escolha: ");
console.log();
console.log(`Você escolheu a opção ${opcao}`);

switch(Number(opcao))
{
    case 1:
        console.log("*** Listando os Salários Mínimos de 2010 à 2020 ***");
        //Percorrendo o array
        for (const salMin of salarioMinimo){
            let ano = salMin.ano;
            let salario = salMin.salario;
            let salarioFormatado = salario.toFixed(2).replace(".",",")
            let labelAno = "Ano: ";
            let labelSalario = "Salário Mínimo: ";
            console.log(labelAno.padEnd(30, ".") + ano);
            console.log(labelSalario.padEnd(30,".") + "R$ " + salarioFormatado);
            console.log();
        }
        break;
    case 2:
        console.log("*** Listando os índices IPCA de 2010 à 2020 ***");
        for(const inflaIpca of inflacaoIpca){
            let ano = inflaIpca.ano;
            let ipca = inflaIpca.ipca;
            let labelAno = "Ano: ";
            let labelIpca = "Inflação IPCA: ";
            let ipcaFormatado = ipca.toFixed(2).replace(",",".");
            console.log(labelAno.padEnd(30, ".") + ano);
            console.log(labelIpca.padEnd(30,".") + ipcaFormatado + "%");
            console.log();
        }
        break;
    case 3:
        // Aqui temos que acessar duas coleções diferentes
        console.log("*** Listando as Comparações de Aumento Salarial e IPCA ***");
        let contador = 0; // esta variável vai ajudar com o acesso a coleção da inflacao
        for (const salMin of salarioMinimo){
            let ano = salMin.ano;
            let salario = salMin.salario;
            let salarioFormatado = salario.toFixed(2).replace(".",",")
            let labelAno = "Ano: ";
            let labelSalario = "Salário Mínimo: ";
            // acesso ao indice ipca direto da coleção
            let indiceIpca = inflacaoIpca[contador].ipca;
            let labelIpca = "Índice de Inflação";
            let ipcaFormatado = indiceIpca.toFixed(2).replace(".",",");
            // listando no consele as informações
            console.log(labelAno.padEnd(30, ".") + ano);
            console.log(labelSalario.padEnd(30,".") + "R$ " + salarioFormatado);
            console.log(labelIpca.padEnd(30, ".") + ipcaFormatado + "%");
            console.log();
            contador++; // incrementando o contador que auxilia o acesso ao ipca
        }
        break;
    default:
        console.log("->>> Você escolheu uma opcão inválida - Tente Novamente <<<-");
        break;
}

// Executando a Escolha
console.log("--------------------------------------------------------------");
console.log("**                 Seu Relatório                            **");
console.log("--------------------------------------------------------------");



