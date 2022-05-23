class Banco{

    constructor(numConta, numAgencia, saldo){
        this.numAgencia=numAgencia;
        this.numConta=numConta;
        this.saldo=saldo;
    }

  

    depositar(valor) {
        return this.saldo += valor;
        
    }

    sacar(valor) {
        if (this.saldo < valor){
            return "Saldo insuficiente."
        } else {
            return this.saldo -= valor;
        }
        
    }
}

let banco = new Banco(111,586,100);

banco.depositar(100);
console.log(banco.saldo);

console.log(banco.sacar(90));
console.log(banco.saldo);


