// Need to loop through the first one
    // Add a second arr so you can compare [x] = [y]
        //if statement to combine location of the two values
            // second... then check two values against each other, then in placement to the new arr (use the sort from yesterday)
const combine = (leftArr, rightArr) => {
    var newArr = [];
    var fullLength; 
    runnerOne = 1;
    runnerTwo = 1;
    lengthRight = rightArr.length;
    lengthLeft = leftArr.length

    console.log(leftArr.length + rightArr.length);

    // add 
    if(leftArr[0] <= rightArr[0]){
        newArr.push(leftArr[0])
        newArr.push(rightArr[0])
    }else{
        newArr.push(rightArr[0])
        newArr.push(leftArr[0])
    }

    while(lengthLeft > 0 && lengthRight > 0){
        for(i = 0; i <= newArr.length; i++){
            if(leftArr[runnerOne] <= newArr[i]) {
                console.log("here")
                newArr.push(leftArr[i])
                lengthLeft--;
                break;
            }
        }

        for(j = 0; j <= newArr.length; j++){
            if(rightArr[runnerTwo] <= newArr[j]) {
                console.log("here")
                newArr.push(rightArr[j])
                runnerTwo--;
                break;
            }
        }
            
        
    }  
        

    console.log(newArr)
    console.log(newArr.length)
}

combine([1,3,7,9,33],[0,2,4,6,11,14,21,45])