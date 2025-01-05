function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura)
    return imc;
};

function restornaStatusIMC(imc){
    let status;
    if(imc < 18.5){
        status = 'Abaixo do peso.';
    }
    else if(imc >= 18.5 && imc < 24.9){
        status ='Peso normal.'
    }
    else if(imc >= 24.9 && imc <30){
        status = 'Acima do Peso.';
    }
    else{
        status = 'Obeso.'
    }
    return status;
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.restornaStatusIMC = restornaStatusIMC;