function filterOdds(numbers){
    
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 != 0) {
            console.log(numbers[i] );
        }
    }
}

filterOdds([1,2,3,4,5]);
