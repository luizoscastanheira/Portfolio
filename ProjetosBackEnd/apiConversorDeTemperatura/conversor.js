// Camada de Serviço com as funções de conversão

function converteTemperatura(temperatura, conversor){
    let resultado;

    if(conversor == 'C'){
        resultado = converteParaCelsius(temperatura);
    }else if(conversor == 'F'){
        resultado = converteParaFahrenheit(temperatura);
    };

    return resultado;
};

function converteParaCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
};

function converteParaFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit
};

// Exportando as funções - Forma antiga
// exports.converteTemperatura = converteTemperatura;

// Exportando as funções - Forma atualizada

export { converteTemperatura }