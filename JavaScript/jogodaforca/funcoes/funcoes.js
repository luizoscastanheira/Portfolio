// Importando o readline-sync
//import entradaUser from 'readline-sync';

// FUNÇÃO que seleciona uma palavra aleatória no array
function palavraAleatoria(lista){
    let palavraEscolhida = lista[Math.floor(Math.random(0, 1) * lista.length)];
    return palavraEscolhida;
};

//FUNÇÃO que oculta a palavra selecionada
function ocultarPalavra(palavra){
    let primeiraLetra = palavra[0];
    let undeline = '_'.repeat(palavra.length -1);
    let palavraOculta = primeiraLetra + undeline;
    //console.log(palavraOculta); // descomente para teste - apagar na versão final
    return palavraOculta;
};

// FUNÇÃO que atualiza a palavra oculta
function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida ){
    let palavraOcultaArray = palavraOculta.split('');

    for (let i = 0; i < palavraEscolhida.length; i++){
        if(letraDigitada == palavraEscolhida[i]){
            palavraOcultaArray[i] = letraDigitada;
        };
    };
    return palavraOcultaArray.join('');
};

// FUNÇÃO que pergunta ao usário uma letra




// Descomente abaixo se quiser testar a listagem de itens do array

/*
for (let dados of listaDeFrutas){
    console.log(dados);
};
*/





// Continuando o Jogo se desejar
function loopGame(){
    let escolha = entradaUser.question('Deseja Continar a jogar? ');
    if (escolha == "S"){
        console.log("Escolheu sim");
        iniciarApp();
        return "s";
    }else{
        console.log("Escolheu Não");
        return "n";
    }
};




// Exportando as funções
export {loopGame, palavraAleatoria, ocultarPalavra, atualizarPalavraOculta};