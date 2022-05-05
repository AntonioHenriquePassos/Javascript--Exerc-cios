let idade = 18;
let temCNH = false;

if (idade>=18 && temCNH ==false){
    console.log("Tem idade, mas não pode dirigir, pois não tem CNH.");

} else if (idade >=18 && temCNH==true){
    console.log("Tem idade e tem CNH, então pode dirigir.")
} else (idade <18 && temCNH==false){
    console.log("Sem idade e CNH não pode dirigir.")
}
