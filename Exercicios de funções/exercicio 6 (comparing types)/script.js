function detectaTipo(dado){
    let number = 1;
    let string = "a";

    if (typeof dado == typeof number){
        return console.log(`${dado} é um NUMBER!`);
    } else if (typeof dado == typeof string){
        return console.log(`${dado} é uma STRING!`);
    } else {
        return console.log(`${dado} é um BOOLEAN!`);

    }
}

detectaTipo(-0.8);
detectaTipo("Amor");
detectaTipo(true);

// Outra forma de fazer

function informaTipo(dado){
    if (typeof dado === "string"){
        return console.log(`${dado} é uma STRING!`);
    } else if (typeof dado === "number"){
        return console.log(`${dado} é um NUMBER!`);
    } else if (typeof dado === "boolean"){
        return console.log(`${dado} é um BOOLEAN!`);
    }

}

informaTipo(5);
informaTipo("Sexo");
informaTipo(5<8);