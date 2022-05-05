for(let i=1; i<=100; i++){
    let cont = 0;
    for(let j=1; j<=100; j++){
        if(i%j==0){
            cont++; 
        }
    }
    if (cont==2){
        console.log(`O número ${i} é primo.`);
    }
}