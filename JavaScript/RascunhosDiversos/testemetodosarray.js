import {fatosHistoricos, numeros, palavras, dadosDeFuncionarios, listaDeProdutos, jogosExclusivos, listaProgramadores, listaCarros, listaSeries } from "./array_colecoes.js";


const data = [
    {name:"Matheus", age:31, sallary:2000, driverLicence:false},
    {name:"Luiz", age:48, sallary:0, driverLicence:true},
    {name:"Rosicleia", age:45, sallary:1.412, driverLicence:true},
    {name:"Guilherme", age:24, sallary:600, driverLicence:false},
    {name:"Jorge", age:73, sallary:2500, driverLicence:true},
    {name:"Elizabeth", age:69, sallary:2000, driverLicence:false}
];

let listar = data.map(d => d.name);
console.log(listar)


// Metodo reverse
let reverseData = data.reverse();
console.log(reverseData);

// Metodo find - ATENÇÃO - esse método retorna apenas UM resultado, sempre o primeiro encontrado

let encontar = data.find((user) => user.sallary > 600);
console.log('usando o meto find - ele retorna um objeto e NÃO um array, tem diferença')
console.log(encontar)

let fatoDoDia = fatosHistoricos.find((fato) => fato.Ano === "2020")
console.log(fatoDoDia);

// filter

let drivers = data.filter((data) => data.driverLicence === true);
console.log(drivers);

let fatoAno = fatosHistoricos.filter((fato) => fato.Ano === '2020');
console.log(fatoAno)



// map

data.map((user) => {user.news = true});
console.log(data)

data.map((user) => {
    if (user.age >= 50 ){
        user.idoso = true
    }else{
        user.idoso = false
    }
});

console.log(data)


///////////////

// testando várias maneiras de trabalhar uma função

// Função nomeada
function verificarAno(fato) {
    return fato.Ano === "2020";
}

// Usando a função para encontrar o primeiro fato de 2020
let fatoDia = fatosHistoricos.find(verificarAno);
console.log(fatoDoDia);

// Usando a função para filtrar todos os fatos de 2020
let fatosDe2020 = fatosHistoricos.filter(verificarAno);
console.log(fatosDe2020);

// Usando a função para checar se existe algum fato de 2020
let existeFatoDe2020 = fatosHistoricos.some(verificarAno);
console.log(existeFatoDe2020);


