// Importando o readline-sync
import entradaUser from 'readline-sync';

//iniciando o jogo
function iniciarApp(){
    console.clear();
    console.log("--------------------- Jogo da Forca ------------------------");
    console.log("Advinhe o nome da Fruta com X letras:");
};

// Continuando o Jogo se desejar


function loopGame(opcao){
    if (opcao == "S"){
        console.log("Escolheu sim");
        iniciarApp();
        return "s";
    }else{
        console.log("Escolheu Não");
        return "n";
    }
};




// Exportando as funções

export {iniciarApp, loopGame};