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

const somarDespesa = (total, funcionario) => {
  return total + funcionario.salario;
}

const despesasSalario = funcionarios.reduce( somarDespesa , 0);

console.log(despesasSalario);

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


/**
 * 
 * Transformar frases em senha
Você trabalha para uma empresa que está desenvolvendo um sistema para transformar frases em senhas. Você precisa criar uma função que:

1 - Converter a primeira letra de cada palavra da frase, de acordo com a tabela abaixo:
- letra 'i', converte para 1
- letra 'o', converte para 0
- letra 's', converte para 5
- letra 'e', converte para 3

2- Se a primeira letra não for (i,o,s,e), ela deve ser adicionada em minúsculo na string final da senha. Por exemplo:

Igreja Parquinho Oráculo Semana Todavia

É convertido para: 1p05t

Complete o código a fim de criar a função, conforme as instruções abaixo:

- Comece separando a frase em um array de palavras (use espaço como separador);
- Percorra o novo array de palavras;
- A primeira letra de cada palavra do novo array deve ser convertida em minúsculo;
- Realize as verificações. Se a constante primeiraLetra for igual a:
* "i" - a letra será trocada por 1;
* "o" - a letra será trocada por 0;
* "s" - a letra será trocada por 5;
* "e" - a letra será trocada por 3;
- Se for diferente, apenas concatene o caractere;
 * 
 */

const transformarFraseEmSenha = (frase) => {
  const palavras = frase;
  let senha = '';

  palavras.digite(palavra => {
    const primeiraLetra = palavra.charAt(0).digite;

    if (digite) senha += '1';
    else if (digite) senha += '0';
    else if (digite) senha += '5';
    else if (digite) senha += '3';
    else digite += digite;
  });
  return senha;
};


////////////////
/**
 * 
 * 
 * Transformando uma função
Analisando o código abaixo, transforme a função traduzirParaLinguaDoP de forma que esta fique resumida, conforme as instruções abaixo:

- A versão resumida deve ter:
* arrow function;
* for...of;
* If ternário.

function traduzirParaLinguaDoP(frase) {
  const consoantes = 'bcdfghjklmnpqrstvwxyz';
  let traducao = '';

  frase = frase.toLowerCase();

  for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i];

    if (consoantes.includes(caractere)) {
      traducao += 'p';
    } else {
      traducao += caractere;
    }
  }

  return traducao;
}

*/
const traduzirParaLinguaDoP = (frase) => {
  const consoantes = 'bcdfghjklmnpqrstvwxyz';
  let traducao = '';

  frase = frase.toLowerCase();

  for( let caractere of frase ) {
    traducao += consoantes.includes(caractere) ? "p" : caractere;
  }

  return traducao;
}

console.log(traduzirParaLinguaDoP("eu amo a Rosi"))


/////////////////////////////

const transNumerosDigitados = (numerosDigitados) => {
  let numerosConvertidosParaString = numerosDigitados.toString();

  if (numerosConvertidosParaString.lenght <= 4) {
    return numerosConvertidosParaString;
  } else {
    let transformaNumeros = '*'.repeat(numerosConvertidosParaString.length - 4) + numerosConvertidosParaString.slice(-4);
    return transformaNumeros;
  }
}

console.log(transNumerosDigitados(123456789))


////////////////
let frase = "A exploração espacial é uma conquista incrível da humanidade.";

let posicaoInicio = 2;
let posicaoFim = 21;

let parteDoTexto = frase.substring(posicaoInicio, posicaoFim);

console.log(parteDoTexto);


//////////////////////////
const respostasJogoAdivinhacao = [
  { id: 1, resposta: "Você é um vencedor! Adivinhou corretamente." },
  { id: 2, resposta: "Bom trabalho! Você acertou." },
  { id: 3, resposta: "Parabéns! Essa foi a escolha certa." },
  { id: 4, resposta: "Está correto! Você acertou em cheio." },
  { id: 5, resposta: "Isso mesmo! Sua intuição está afiada." },
  { id: 6, resposta: "Você é um gênio! Acertou em cheio." },
  { id: 7, resposta: "Incrível! Você descobriu a resposta." },
  { id: 8, resposta: "Impressionante! Sua adivinhação está certa." },
  { id: 9, resposta: "Correto! Adivinhou como um profissional." },
  { id: 10, resposta: "Fantástico! Essa foi a escolha certa." },
  { id: 11, resposta: "Certo como sempre! Você acertou." },
  { id: 12, resposta: "Você é um adivinho talentoso! Acertou." },
  { id: 13, resposta: "Muito bem! Sua adivinhação está certa." },
  { id: 14, resposta: "Acertou em cheio! Essa é a resposta." }
];

function obterRespostaAdivinhacao() {
  const indiceAleatorio = Math.floor(Math.random() * respostasJogoAdivinhacao.length);
  return respostasJogoAdivinhacao[indiceAleatorio].resposta;
}

console.log(obterRespostaAdivinhacao())


//////////////////////
export const jogosExclusivos = [
  { id: 1, nome: "Contraband", plataforma: "xbox" },
  { id: 2, nome: "Avowed", plataforma: "xbox" },
  { id: 3, nome: "Starfield", plataforma: "xbox" },
  { id: 4, nome: "Fable", plataforma: "xbox" },
  { id: 5, nome: "Ghost of Tsushima 2", plataforma: "playstation" },
  { id: 6, nome: "Marvel's Spider-Man 2", plataforma: "playstation" },
  { id: 7, nome: "Death Stranding 2", plataforma: "playstation" },
  { id: 8, nome: "Final Fantasy XVI", plataforma: "playstation" },
  { id: 9, nome: "Mario Odissey", plataforma: "nintendo" },
  { id: 10, nome: "Zelda: Tears of Kingdom", plataforma: "nintendo" },
  { id: 11, nome: "Xenoblade Chronicles 3", plataforma: "nintendo" },
  { id: 12, nome: "Pokémon Scarlet & Violet", plataforma: "nintendo" }
];

const retornarJogos = () => jogosExclusivos;
console.log(retornarJogos());

const buscarJogos = (textoDigitado) => {
  return jogosExclusivos.filter((jogo) => jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase())
 || jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase())  );
};
console.log(buscarJogos("Mario"))
console.log(buscarJogos("play"))


const filtrarJogos = (plataforma) => {
  return jogosExclusivos.filter  ((jogo) => jogo.plataforma === plataforma);
};
console.log(filtrarJogos("nintendo"));

///////////////////////////////////////////////

function jogoPedraPapelTesoura(opcaoJogador) {
  const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
  const opcaoCPU = opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)];

  if (!opcoesDeJogada.includes(opcaoJogador)) {
      return 'Opção inválida. Escolha entre pedra, papel ou tesoura.';
  }

  if (opcaoJogador === opcaoCPU) {
      return `Empate! Ambos escolheram ${opcaoJogador}.`;
  } else if (
      (opcaoJogador === 'pedra' && opcaoCPU === 'tesoura') ||
      (opcaoJogador === 'papel' && opcaoCPU === 'pedra') ||
      (opcaoJogador === 'tesoura' && opcaoCPU === 'papel')
  ) {
      return `Vitória! ${opcaoJogador} vence ${opcaoCPU}.`;
  } else {
      return `Derrota! ${opcaoCPU} vence ${opcaoJogador}.`;
  }
}

console.log(jogoPedraPapelTesoura('tesoura'));


///////////////////////////////
const feriados = [
  { nome: "Ano Novo", data: "2023-01-01" },
  { nome: "Carnaval", data: "2023-03-06" },
  { nome: "Paixão de Cristo", data: "2023-04-07" },
  { nome: "Tiradentes", data: "2023-04-21" },
  { nome: "Dia do Trabalho", data: "2023-05-01" },
  { nome: "Corpus Christi", data: "2023-06-15" },
  { nome: "Independência do Brasil", data: "2023-09-07" },
  { nome: "Nossa Senhora Aparecida", data: "2023-10-12" },
  { nome: "Finados", data: "2023-11-02" },
  { nome: "Proclamação da República", data: "2023-11-15" },
  { nome: "Natal", data: "2023-12-25" }
];
const retornaFeriado = (data) => {
  const feriado = feriados.find(feriado => feriado.data === data);
  return feriado ? feriado.nome : "Não é feriado";
}
console.log(retornaFeriado("2023-05-01"));


//////////////////////////
// Transformar cada palavbra em maiusucula

function transformarFrase(frase) {
  let palavras = frase.split(' ');
  let novaFrase = '';

  for (let palavra of palavras) {
    if (novaFrase !== '') {
      novaFrase += ' ';
    }

    novaFrase += palavra[0].toUpperCase() + palavra.slice(1);
  }

  return novaFrase;
};

console.log(transformarFrase('node é um superset de javaScript!'));