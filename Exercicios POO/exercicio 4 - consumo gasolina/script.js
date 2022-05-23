class carro{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca=marca;
        this.cor=cor;
        this.gasolinaRestante=gasolinaRestante;
        this.consumo=consumo;
        
    }



    dirigir(km){
      let litrosConsumidos = km/this.consumo;

      return this.gasolinaRestante-= litrosConsumidos;
        
    }

    abastecer(l){
        this.gasolinaRestante+=l;
    }

}

let carro1 = new carro("celta", "rosa", 100, 8);
console.log("Há " + carro1.dirigir(56) +" litros.");
console.log(carro1);



