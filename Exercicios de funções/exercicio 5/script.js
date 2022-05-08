function entrarAutoEscola (idade){
    if (idade>=18){
        return ("Essa pessoa pode entrar na auto escola");
    } else {
        return ("Essa pessoa ainda não pode entrar na auto escola");
    }
}

console.log(entrarAutoEscola(15));
console.log(entrarAutoEscola(18));