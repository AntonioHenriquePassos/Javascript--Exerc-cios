
//Muda de positivo para negativo e vice-versa
function mudaCarga(n){
    if(n==-n){
        return Math.abs(n);
    } else{
        return (n - n) - n;
    }
}

console.log(mudaCarga(30));
console.log(mudaCarga(-60));