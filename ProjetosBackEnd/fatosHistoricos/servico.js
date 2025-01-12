// Camada de Serviço - Contém as funções do app

// Importando a camada de dados

const dadosFatos = require('./dadosFatos')

// Função retorna ano
function servicoBuscarFatoPorAno(ano){
    let fatoSelecionado = dadosFatos.fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
};


// console.log(servicoBuscarFatoPorAno(1987))


exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;