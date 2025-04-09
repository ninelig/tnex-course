function fizzBuzzTwist(){
    for (i=1; i<=50; i++) {
        if (i % 3 == 0){
            console.log(i, "Fizz")
        } 
        if (i % 5 == 0){
            console.log(i, "Buzz")
        }
        if (i % 3 && i% 5 ==0){
            console.log(i, "FizzBuzz")
        }
        if (i.toString().includes('3') ) {
            console.log (i, "Almost Fizz")
        }
    }
    
}
fizzBuzzTwist();

