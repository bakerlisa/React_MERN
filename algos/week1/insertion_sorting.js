// for(i=1;i < arr.length;i++){ - loop through whole array
//     // we don't need to start at z cause 1 is always sorted
//         // IF STATEMENT: compare to values - current, and pervious: 
//             // #2 FOOR LOOP: --j : 
//                 // comparing our "new" view value based keep j, other dials backwards
//                     // IF TRUE: temp to swap
//  RETURN arr;
        
// }


// WITH GROUP:
const insertionSort = (arr) => {
    for(var i=1;i < arr.length;i++){
        current = arr[i];
        for(var j=i - 1;j >= 0 && arr[j] > current; j--){
            arr[j+1] = arr[j];            
        }
        arr[j+1] = current;
    }
    return arr;
}
// console.log(insertionSort([6,4,5,2,8,14,1,3]))


//LISA LOOP:
const insertionSortLisa = (arr) => {
    for(var i=1;i < arr.length;i++){
        for(var j=i;j > 0 && arr[j-1] > arr[j]; j--){            
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}
console.log(insertionSortLisa([6,4,5,2,8,14,1,3]))


// THOMAS SORT:
const insertionSortThomas = (arr) => {
    //traverse through entire array
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let num = arr[i];
        while(num < arr[j] && j >= 0){ 
            //Swap values until they don't need to be swapped or reach theß
            arr[j+1] = arr[j];
            arr[j] = num;
            j--;
        }
    }
    return arr;
}

// console.log(insertionSortThomas([6,8,1,2,-100,0,50,12,32]))

// =========== CODE EDITS:
// for(i=1;i < arr.length;i++){
//     // we don't need to start at z cause 1 numbers always sorted
//         // if compare to values: current, and pervious: 
//             //anonther foor loop based on 0 to i: -- 
//                 // if statment to check
//                     // temp to swap    
// }


// I was doing a swap, he had the if statement in the for loop conditional
// console.log(`i: ${i} `)
// console.log()
// if(arr[j] > arr[i]){
//     var temp = arr[i];
//     arr[i] = arr[];
//     arr[j] = temp;
// }