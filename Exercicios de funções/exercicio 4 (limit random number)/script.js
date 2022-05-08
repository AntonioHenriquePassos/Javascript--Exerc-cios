//Mostra se o valor do random é maior que o passado pelo parâmetro.

function geraAleatorio(n){
    aletaorio = Math.random();
    if (aletaorio > n){
        return (`Número gerado (${aletaorio}) maior que ${n}!`);
    } else {
        return aletaorio;
    }
}

console.log(geraAleatorio(0.50));

// Limita o random pelo numero inserido no parâmetro

function limitaAletorio (n){
    return Math.ceil(Math.random() * n);
}

console.log(limitaAletorio(5));