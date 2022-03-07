// 1. 
Number.prototype.isPrime = function() {
    var q = Math.sqrt(this);
    for( let i=2; i<= q; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2 ; // for math reasons, 1 is considered prime


while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 10,000th prime number is 104729
// This took 30266.05791592598 milliseconds to run

// Then

// The 10,000th prime number is 104729
// This took 102.10374999046326 milliseconds to runx

// 2. Recursive
// This took 0.8084579706192017 milliseconds to run

// !!!! Iteration !!!!!
// This took 0.018999934196472168 milliseconds to run


// 3.
// ORIGNAL : This took 0.028208017349243164 milliseconds to run

// FIRST RUN: This took 0.03483307361602783 milliseconds to run

// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// var newStroy  = '';
// for(i=story.length;i>0;i--){
//   newStroy += story[i]
// }

// SECOND RUN: This took 0.003916025161743164 milliseconds to run - (did not expect that to be faster)

// function reverseString(string){
//     var newStory = '';
//     for(i=string.length -1;i>=0;i--){
//         newStory += string[i] 
//     }
//     return newStory
// }

// console.log(reverseString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));