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

// Função que valida o ano
function servicoValidaAno(ano){
    if(isNaN(ano)){
        return false;
    }else{
        if(ano >= 1920 && ano <= 2020){
            return true;
        }else{
            return false;
        }
    }
}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidaAno = servicoValidaAno;