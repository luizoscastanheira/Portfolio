/* Função MAP - Manipulando array

1 - array.map(MAPEAR item por item do array)
2 - O array original pode ser alterado por você ao ser MAPEADO
3 - O novo array vai ter o MESMO numero de itens que o array ORIGINAL

Sintaxe com 3 dados, sendo 2 opcionais:
    - Item por item do array (obrigatorio)
    - Posição atual do Array (indice)
    - Array completo
*/
 //Array original
 const numeros = [1, 2, 3, 4, 5];
//Novo array
const dobro = numeros.map(numero => numero * 2);
console.log(dobro);



// Array Original
// Coleção de Produtos
const listaDeProdutos = [
    {id: 1, nome:"detergente", valor: 2.00, categoria:"limpeza", quantidade:2},
    {id: 2, nome:"amaciante", valor: 6.50, categoria:"limpeza", quantidade:22},
    {id: 3, nome:"pão", valor: 2.00, categoria:"alimento", quantidade:34},
    {id: 4, nome:"queijo", valor: 7.00, categoria:"alimento", quantidade:7},
    {id: 5, nome:"leite", valor: 4.50, categoria:"alimento", quantidade:27},
    {id: 6, nome:"prato", valor: 12.00, categoria:"utensílio", quantidade:345},
];

console.log(listaDeProdutos);

const atualizaPreco = listaDeProdutos.map( produto => {
    let novoPreco = produto.valor + 10;

    return {
        id: produto.id,
        nome: produto.nome,
        valor: novoPreco
    }
});

console.log(atualizaPreco)