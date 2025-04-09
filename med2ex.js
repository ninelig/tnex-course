function findMaxValue(numbers){
    let max = 0;
    for ( let num of numbers){
        if (num > max) {
            max = num;
        }
        
    }
    console.log(max);
    
}

findMaxValue([2,4,7,32]);