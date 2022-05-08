let nomes = ["Maria","Joao","Lucas","Antonio","Marcus", "Fernando"];

let nomesFrutas = ["Jaca","pessego","banana"];

function verficaLength (array){
    if (array.length < 5){
        return "Poucos elementos";
    } else {
        return "Muitos elementos";
    }
}

console.log(verficaLength(nomes));

console.log(verficaLength(nomesFrutas));


    