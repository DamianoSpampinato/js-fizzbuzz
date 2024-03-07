

// Stampare in console i numeri da 1 a 100
for (let i= 1; i <= 100; i++){
    let fuzzOrPuzz = i;
    
    //fare in modo che i multipli di 3 e 5 stampino FizzBuzz
    if (i % 3 === 0 & i % 5 ===0) {
        fuzzOrPuzz = 'FuzzPuzz';
        console.log(fuzzOrPuzz);
    //fare in modo che i multipli di 5 stampi buzz
    } else if(i % 5 === 0){
        fuzzOrPuzz = 'Puzz';

        console.log(fuzzOrPuzz);
        
        //fare in modo che i multipli di 3 stampi fuzz
    } else if (i % 3 === 0) {
        fuzzOrPuzz = 'Fuzz';
        
        console.log(fuzzOrPuzz);
    }
    else{
    console.log(i);

    }
    const box = document.createElement('div');
    box.innerHTML = fuzzOrPuzz;
    const container = document.querySelector('#container');
    container.append(box);
    
}