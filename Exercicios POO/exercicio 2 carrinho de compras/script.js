class CarrinhoCompras{

    constructor(itens, qtotal, vtotal){
        this.itens=itens;
        this.qtotal=qtotal;
        this.vtotal=vtotal;
    }


    addItem(item){
        let contador=0;
        for (let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if (contador == 0){
            this.itens.push(item);
        }

        this.qtotal += item.qtd;
        this.vtotal += item.preco * item.qtd;
    }

    removeItem(item){
        for (let itemCarrinho in this.itens){
            if (this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex (function(obj){return obj.id == item.id});

                this.qtotal -= this.itens[itemCarrinho].qtd;
                this.vtotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index,1);
            }
        }
    }


}

let carrinho = new CarrinhoCompras([
    {
        id:01,
        nome: "Camisa",
        qtd:1,
        preco:20
    },
    {
        id:02,
        nome: "calça",
        qtd:2,
        preco:50
    }
], 3, 120); 

console.log(carrinho);
carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20});
console.log(carrinho);
carrinho.addItem({id:03, nome:"Boné", qtd:1, preco:15});
console.log(carrinho);
carrinho.removeItem({id:01, nome:"Camisa", qtd:1, preco:20});
console.log(carrinho);








