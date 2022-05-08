function contaTexto( texto){
    if (texto.length > 10 ){
        return "Texto muito longo!";
    } else{
        return "Texto dentro do limite";
    }
}

console.log(contaTexto("amor é algo bom!"));
console.log(contaTexto("amor!"));