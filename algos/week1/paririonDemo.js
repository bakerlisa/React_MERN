const parition = (arr) => {
    var pivot = 0;
    var runner = 1;

    while(runner < arr.length ){
        if(arr[pivot] > arr[runner]){
            let lessVal = arr[runner];
            arr.splice(runner,1);
            arr.splice(0, 0, lessVal);
            pivot++;
        }
        runner++; 
        console.log(arr)   
    }
    return arr;
}

console.log(parition([5,100,1,4,9,2,10,5,3,-1]));

