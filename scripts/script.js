/* Regras do negócio - Adultos: Carne (400gr por pessoa, acima de 6h passa a ser 600gr), Refrigerante (1200ml por pessoa, acima de 6h 
    passa a ser 2000ml), Água (1000ml por pessoa, acima de 6h passa a ser 1500ml), Criança: (metade dos cálculos para adultos). */

// Estou linkando essa variável com o elemento "adultos, criancas, duracao e resultado" no Html
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

// Função que cálculo a quantidade de carne em relação a duração da festa
function carnePP (duracao){
    if (duracao < 360){
        return 400;
    } else {
        return 600;
    }
}
// Função que cálculo a quantidade de refrigerante em relação a duração da festa
function refriPP (duracao){
    if (duracao < 360){
        return 1200;
    } else {
        return 2000;
    }
}
// Função que cálculo a quantidade de água em relação a duração da festa
function aguaPP (duracao){
    if (duracao < 360){
        return 1000;
    } else {
        return 1500;
    }
}

// Função ligada ao botão "calcular" onde fará os cálculos
function calcular() {
    // Variáveis que receberão os valores dos inputes "inputAdultos, inputCriancas e inputDuracao"
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qntTotalCarne = (carnePP(duracao) * adultos) + ((carnePP(duracao) / 2) * criancas);
    let qntTotalRefri = (refriPP(duracao) * adultos) + ((refriPP(duracao) / 2) * criancas);
    let qntTotalAgua = (aguaPP(duracao) * adultos) + ((aguaPP(duracao) / 2) * criancas);

    resultado.innerHTML = `<p>${qntTotalCarne} gr de Carne`
    resultado.innerHTML += `<p>${qntTotalRefri} ml de Refrigerante`
    resultado.innerHTML += `<p>${qntTotalAgua} ml de Água`
}