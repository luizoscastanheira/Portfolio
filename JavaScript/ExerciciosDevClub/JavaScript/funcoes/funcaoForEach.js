const palavras = ["primeira", "segunda", "terceira", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima"];
let totalLetras = 0;

palavras.forEach(palavra => totalLetras += palavra.length);

console.log("Total de letras: ", totalLetras);