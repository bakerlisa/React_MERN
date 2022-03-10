const parition = (arr) => {
    var pivot = 0;
    var runner = 1;

    //takes care of the first two numbers : it was giving me a headache when it was int he looop, so I tok it out
    if(arr[pivot] > arr[runner]) {
        //can't do this insde of loop because if we skip a number things get wonky
        var temp = arr[runner];
        arr[runner] = arr[pivot];
        arr[pivot] = temp;
        runner++;
        pivot++;
    }else{

    }

    for(i = runner;i < arr.length;i++){
        if(arr[pivot] > arr[i]){ 
            // (add) splice in : minus 1 because we need to be one behind pivot
            arr.splice(pivot - 1,0,arr[i]);
            // (remove) splice out : + 1 to remove the element we just added
            arr.splice(i + 1,1);

            pivot++;
        }
    }
    return arr;
}


console.log(parition([5,100,4,9,2,10,5,3,-1]));