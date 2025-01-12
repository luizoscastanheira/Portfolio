// Relembrando função map

// Criando uma coleção de objetos
const listaDeProdutos = [
    {id: 1, nome:"detergente", valor: 2.00, categoria:"limpeza"},
    {id: 2, nome:"amaciante", valor: 6.50, categoria:"limpeza"},
    {id: 3, nome:"pão", valor: 2.00, categoria:"alimento"},
    {id: 4, nome:"queijo", valor: 7.00, categoria:"alimento"},
    {id: 5, nome:"leite", valor: 4.50, categoria:"alimento"},
    {id: 6, nome:"prato", valor: 12.00, categoria:"utensílio"},
];

// Função MAP -  Cria um novo array a partir de um existente
// não esquecer de passar uma função callback para que map funcione

let ids = listaDeProdutos.map(listaDeProdutos => listaDeProdutos.id);
let nome = listaDeProdutos.map(listaDeProdutos => listaDeProdutos.nome);

//testando map
console.log(ids)
console.log(nome)

const numeros = [1,3,5,7,9];

const duplicar = numeros.map(numeros => numeros * 2);
console.log(duplicar);

// Função filter

const alimentos = listaDeProdutos.filter(p => p.categoria === 'alimento');
console.log(alimentos);

console.log(alimentos.map(a => a.nome))
console.log((alimentos.map(a => a.nome)).length)


const alimento = listaDeProdutos
    .filter(p => p.categoria === 'alimento')
    .map(a => a.nome)
    
console.log(alimento)