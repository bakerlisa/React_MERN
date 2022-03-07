// Bubble Sort
// Looking at 2 numbers and seeing if they're in the correct order

// Way1:
function bubbleSort(arr){
    i=0;
    var finish = true;
    while(i < arr.length - 1){
        console.log()
        if(arr[i] > arr[i+1]){
            var temp = arr[i]
            finish = false;
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
        i++;
    }

    if(finish === true){
        return arr;
    }else{
        return bubbleSort(arr);
    }
}

// let arg = [5,4,2,6,8,14,3,1];
// console.log(bubbleSort(arg));

// Way2:
function bubbleSort(arr){
    var finish = true;
    while(finish){
        var finish = false;
        for(i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                finish = true;
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr
}

let arg = [5,4,2,6,8,14,3,1];
console.log(bubbleSort(arg));
