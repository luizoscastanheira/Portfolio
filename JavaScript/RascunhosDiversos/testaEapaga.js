let data = new Date();
let hora = data.getHours();

if(hora < 9 || hora > 18)
{
   console.log("Loja fechada");
}
else
{
    console.log("Loja aberta");
}


/////////////////////////////

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2023 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2023 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2025 },
  ];
  
const carrosPorAno = () => {
     let hoje =  new Date();
     let anoAtual = hoje.getFullYear();
     const carrosDoAno = carros.filter(carro =>  carro.anoFabricacao === anoAtual);
     return carrosDoAno;
};

console.log(carrosPorAno());

//////////////////////////////


function transformarNumerosDigitados(numerosDigitados) {
  let numerosSTR = numerosDigitados.toString();

  if (numerosSTR.length <= 4) {
    return numerosSTR;
  } else {
    let transformaNumeros = '#'.repeat(numerosSTR.length - 4) + numerosSTR.slice(-4);
    return transformaNumeros;
  }
}

console.log(transformarNumerosDigitados(1234567890))

//////////////////////////////

const diaAtual = new Date().getDay();
console.log(diaAtual)


/////////////////////////////////////
const curiosidades = [

  {id: 1, titulo: 'Curiosidade 1', descricao: 'A formiga é um dos animais mais fortes em relação ao seu tamanho.'},
  {id: 2, titulo: 'Curiosidade 2', descricao: 'O DNA humano, se esticado, alcançaria uma distância de cerca de 16 bilhões de quilômetros.'},
  {id: 3, titulo: 'Curiosidade 3', descricao: 'As baleias-azuis são os maiores animais que já existiram na Terra.'},
  {id: 4, titulo: 'Curiosidade 4', descricao: 'O Sol leva cerca de 8 minutos e 20 segundos para a luz percorrer a distância até chegar à Terra.'},
  
];

function retornarCuriosidade() {
  const numero = Math.floor(Math.random() * curiosidades.length);
  return curiosidades[numero];
};

console.log(retornarCuriosidade());


///////////////////////

const tecnologias = [
  { nome: "C#", tipo: "Linguagem" },
  { nome: ".NET Core", tipo: "Framework" },
  { nome: "Spring", tipo: "Framework" },
];

for (const tec of tecnologias) {
  console.log(tec.tipo + ' ' + tec.nome);
}

/////////////////////////////////////
const atividades = [
  { id: 1, dia: 'Domingo', atividade: 'Descansar', dificuldade: 'Baixa' },
  { id: 2, dia: 'Segunda-feira', atividade: 'Fazer exercícios físicos', dificuldade: 'Média' },
  { id: 3, dia: 'Terça-feira', atividade: 'Estudar programação', dificuldade: 'Alta' },
  { id: 4, dia: 'Quarta-feira', atividade: 'Fazer compras', dificuldade: 'Baixa' },
  { id: 5, dia: 'Quinta-feira', atividade: 'Lavar o carro', dificuldade: 'Baixa' },
  { id: 6, dia: 'Sexta-feira', atividade: 'Assistir a um filme', dificuldade: 'Baixa' },
  { id: 7, dia: 'Sábado', atividade: 'Sair com os amigos', dificuldade: 'Média' }
];

function atividadeDoDia() {
  const diaAtual = new Date().getDay();
  const atividade = atividades.find(atividade => atividade.id === diaAtual);
  return atividade;
}

console.log(atividadeDoDia());


////////////////////////


const funcionarios = [
  { nome: 'José Silva', cargo: 'Gerente', salario: 6000},
  { nome: 'Eliana Rocha', cargo: 'ADM', salario: 3000 },
  { nome: 'Juliana Souza', cargo: 'Vendedor', salario: 2900 },
  { nome: 'Enzo Silva', cargo: 'Vendedor', salario: 2900 },
  { nome: 'Gabriel Machado', cargo: 'Vendedor', salario: 2900 },
];

//const somarDespesa = (funcionarios) => {
 // return total + funcionario.salario;
//}

//const despesasSalario = funcionarios.reduce( somarDespesa , 0);

//console.log(despesasSalario);

/////////////////////

function transformarNumerosDig(numerosDigitados) {
  let numerosConvertidosParaString = numerosDigitados.toString();

  if (numerosConvertidosParaString <= 4) {
    return numerosConvertidosParaString;  
  } else {
    let transformaNumeros = '#'.repeat(numerosConvertidosParaString.length - 4) + numerosConvertidosParaString.slice(-4);
    return transformaNumeros;
  }
};
console.log(transformarNumerosDig(1234567890))


////////////////////

let nome = "Jackeline";

let texto = `${nome} é muito legal!`;

let novoTexto = texto.replace("legal", "simpática");

console.log(novoTexto);
console.log(novoTexto.length);

if(novoTexto.length > 20)
 {
	console.log("Texto longo!");
} 
else
 {
	console.log("Texto curto!");
}