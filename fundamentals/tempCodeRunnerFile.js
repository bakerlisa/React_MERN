// const { performance } = require('perf_hooks');
// const start = performance.now();

// function iFib( n ) {
//       const vals = [ 0, 1 ];
//       while(vals.length-1 < n) {
//           let len = vals.length;
//           vals.push( vals[len-1] + vals[len-2] );
//       }
//       return vals[n];
//   }
//   iFib(200000);
// console.log(`This took ${performance.now() - start} milliseconds to run`);



const { performance } = require('perf_hooks');
const start = performance.now();

function reverseString(string){
  var newStory = '';
  for(i=string.length -1;i>=0;i--){
    newStory += string[i] 
  }
  return newStory
}

console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(reverseString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));
// ==============================

// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");

// console.log(`This took ${performance.now() - start} milliseconds to run`);
