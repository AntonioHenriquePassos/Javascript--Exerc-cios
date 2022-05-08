let frase = "O amor é como um raio de sol.";

let arrayFrase = frase.split(" ");

arrayFrase.forEach(element =>{
    console.log(element);
})

let novaFrase = arrayFrase.join(" ");

console.log(novaFrase);