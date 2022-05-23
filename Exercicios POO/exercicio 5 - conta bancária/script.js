class contaBancaria{

    constructor(saldocc, saldopp, jurospp){
        this.saldocc=saldocc;
        this.saldopp=saldopp;
        this.jurospp=jurospp;
    }

    depositoCC(valor){
        this.saldocc+=valor;

    }

    depositoPP(valor){
        this.saldopp+=valor;

    }

    saqueCC(valor){
        if(this.saldocc >= valor){
            this.saldocc-=valor;        
        } else{
            return "saldo insuficiente."
        }
    }

    saquePP(valor){
        if(this.saldopp >= valor){
            this.saldopp-=valor;        
        } else{
            return "saldo insuficiente."
        }
    }
     tranferPP_CC(valor){
         if(this.saldopp>= valor){
             this.saldopp-= valor;
             this.saldocc+=valor;
         } else{
            return "saldo insuficiente."

         }
     }

     jurosAniversario(){
         let valorJuros = (this.saldopp * this.jurospp)/100;
         this.saldopp += valorJuros;
     }
}

class ContaEspecial extends contaBancaria{
    constructor(saldocc, saldopp, jurospp){
        super(saldocc, saldopp, jurospp*2);
    }
}

let conta = new ContaEspecial(1000,5000,1);
conta.jurosAniversario();
console.log(conta);