//Lowest value
// function quicksort(arr){
//     var mindex = arr[0];
//     for(i=0;i<arr.length;i++){
//         console.log(mindex)
//         console.log(arr[i])
//         console.log('')
//         if(arr[i] < mindex){
//             console.log("here")
//             mindex = arr[i];
//         }
//     }
// }

function quicksort(arr){
    var i = 0;
    var pivot = 5;
    //make pivot index 0
    var j = arr.length - 1;
    var runner = true;
    
    while(runner){
        runner = false;

        for(m=0;m<arr.length;m++){
            // console.log(arr[pivot])
            
            // CHUNK 1: or if((arr[i] > arr[pivot] && arr[j] < arr[pivot]) || (arr[j] == arr[pivot] && arr[i] > arr[pivot]) || (arr[i] == arr[pivot] && arr[j] < arr[pivot])){
            if(arr[i] > arr[pivot] && arr[j] < arr[pivot]){
                var temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
                j--;
                i++;
                runner = true;
            
            // CHUNK 2:  ??what to do when it hits the pivot value and the other still needs to flop values?
            }else if((arr[j] == arr[pivot] && arr[i] > arr[pivot]) || (arr[i] == arr[pivot] && arr[j] < arr[pivot])){
                // ?does the pivot change or just the value? 
                var temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
                j--;
                i++;
                runner = true;
                console.log(`new arr: ${arr}`)
                console.log(`pivot ${pivot}: ${arr[pivot]}`)
                console.log()
                return quicksort(arr);
            
            // CHUNK 3: if the values on the right side of piviot
            }else{
                if(arr[i] < arr[pivot]){
                    i++;
                }
                if(arr[j] > arr[pivot]){
                    j--;
                }
            }

        }
    }
    return arr;
}

// console.log(quicksort([6,26,2,45,3,9,23,7,34,92]));


function partition(arr){
    var index = 0;
    for(r=0;r< arr.length;r++){
        if(arr[r+1] < arr[r]){
            var temp = arr[r];
            arr[r] = arr[r+1];
            arr[r+1] = temp;
            index++;
        }
    }
    
}

console.log(partition([6,26,2,45,3,9,23,7,34,92]));

