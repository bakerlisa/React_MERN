// 1. Quick Sort - pivot 8

function quickSortArrayBack(arr){
    var i = 6;
    var pivot = 9;
    var j = arr.length - 1;

    while(j !== pivot){
        if(arr[i] >= arr[pivot] && arr[j] <= arr[pivot]){
            temp = arr[j]
            arr[j]=arr[i];
            arr[i]= temp;

            j--;
            i++;
        }else{
            if(arr[i] < arr[pivot]){
                i++;
            }
            if(arr[j] > arr[pivot]){
                j--;
            } 
        }
    }
    return arr;
}

// console.log(quickSortArrayBack([1, 4, 2, 7, 6, 3, 
//     8, 20, 9, 15, 12, 10, 30 ] ));


// 2.

function quickSortArrayFront(arr){
    var i = 0;
    var pivot = 1;
    var j = arr.length - 1;

    while(j !== pivot){
        if(arr[i] >= arr[pivot] && arr[j] <= arr[pivot]){
            temp = arr[j]
            arr[j]=arr[i];
            arr[i]= temp;

            j--;
            i++;
        }else if(i == j){
            return j;
        }else{
            if(arr[i] < arr[pivot]){
                i++;
            }
            if(arr[j] > arr[pivot]){
                j--;
            } 
        }
    }
    return arr;

}
console.log(quickSortArrayFront([1, 3, 5, 4, 8, 30, 20, 17, 7]))