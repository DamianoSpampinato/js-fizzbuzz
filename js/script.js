

// Stampare in console i numeri da 1 a 100
for (let i= 1; i <= 100; i++){
    let fuzzOrPuzz = i;
    const box = document.createElement('div');
    const container = document.querySelector('#container');
    let classFuzzOrPuzz;
    //fare in modo che i multipli di 3 e 5 stampino FizzBuzz
    if (i % 3 === 0 & i % 5 ===0) {
        fuzzOrPuzz = 'FuzzPuzz';
        classFuzzOrPuzz = 'fuzz-puzz'
        box.classList.add(classFuzzOrPuzz)
        console.log(fuzzOrPuzz);

    //fare in modo che i multipli di 5 stampi buzz
    } else if(i % 5 === 0){
        fuzzOrPuzz = 'Puzz';
        classFuzzOrPuzz = 'puzz'
        box.classList.add(classFuzzOrPuzz)
        console.log(fuzzOrPuzz);
        
        //fare in modo che i multipli di 3 stampi fuzz
    } else if (i % 3 === 0) {
        fuzzOrPuzz = 'Fuzz';
        classFuzzOrPuzz = 'fuzz'
        box.classList.add(classFuzzOrPuzz)
        console.log(fuzzOrPuzz);
    }
    else{
        console.log(i);
        
    }
    box.innerHTML = fuzzOrPuzz;
    container.append(box);
    box.classList.add('box')
}