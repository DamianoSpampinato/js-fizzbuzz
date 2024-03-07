// Stampare in console i numeri da 1 a 100
for (let i= 1; i <= 100; i++){
    console.log(i);
    //fare in modo che i multipli di 3 e 5 stampino FizzBuzz
    if (i % 3 === 0 & i % 5 ===0) {
        console.log(' FuzzPuzz');
    //fare in modo che i multipli di 5 stampi buzz
    } else if(i % 5 === 0){
        console.log(' Puzz');
        
        //fare in modo che i multipli di 3 stampi fuzz
    } else if (i % 3 === 0) {
        console.log(' Fuzz');
    }
}