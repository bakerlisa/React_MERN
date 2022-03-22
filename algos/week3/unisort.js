// Unisort - with sorted arrays
const unisort = (leftArr,rightArr) => {
    var newArr = []
    var runner = 0;
    var runnerTwo = 0;
    var longArr;
    var shortArr;

    //funds which is longer
    if(leftArr.length > rightArr.length){
        longArr = leftArr;
        shortArr = rightArr;
    }else{
        longArr = rightArr;
        shortArr = leftArr;
    }


    while(runner  <= shortArr.length - 1 ){
        if(shortArr[runner] === longArr[runnerTwo]){
            //if they're equal add one value (doens't matter which cause they'r the same), move both runners
            newArr.push(shortArr[runner])
            runner++;
            runnerTwo++;
        }else{
            // all about adding the smallest value and moving its runner (so we can find any duplicates)            
            if(shortArr[runner] > longArr[runnerTwo]){
                newArr.push(longArr[runnerTwo])
                runnerTwo++;
            }else{
                newArr.push(shortArr[runner])
                runner++;
            }
        }
    }

    // push all the exra long values into array
    if( longArr.length !=  runnerTwo){
        for(i=runnerTwo; i <= longArr.length - 1; i++){
            newArr.push(longArr[i])
        }
    }
    return newArr
}

// console.log(unisort([2,4,7,9,10,10,50,60,100],[-1,2,3,5,7,9,10]))


// unionUnsorted - unsorted arrays
const unionUnsorted = (leftArr,rightArr) => {
    var valuesOne = {}
    var valuesTwo = {}
    // puts each arr into an object
    for(i=0;i<=leftArr.length -1; i++){
        if(valuesOne[leftArr[i]]){
            valuesOne[leftArr[i]] = valuesOne[leftArr[i]] + 1;
        }else{
            valuesOne[leftArr[i]] = 1;
        }
    }
    for(i=0;i<=rightArr.length -1; i++){
        if(valuesTwo[rightArr[i]]){
            valuesTwo[rightArr[i]] = valuesTwo[rightArr[i]] + 1;
        }else{
            valuesTwo[rightArr[i]] = 1;
        }
    }
    //sets up var = (not needed, eaiser to visulize)
    var finalArr = []
    var valuesOneLength = Object.keys(valuesOne).length;
    var valueOneKeys = Object.keys(valuesOne);
    var valueTwoKeys = Object.keys(valuesTwo);
    var valueOneValues = Object.values(valuesOne);
    var valueTwoValues = Object.values(valuesTwo);
    var runner = 0;
    var runnerTwo = 0;
    var runnerThree = 0;

    //loops through checking keys, abd adding values
    while(valuesOneLength - 1 >= runner){
        if(valueOneKeys[runner] === valueTwoKeys[runnerTwo]){
            //if they equal, add it x times the larger number

            if(valueTwoValues[runnerTwo]  >  valueOneValues[runner]){
                runnerThree =  valueTwoValues[runnerTwo]
            }else{
                runnerThree =  valueOneValues[runner]
            }

            // add the longer value x times
            for(m=0;m < runnerThree; m++){    
                finalArr.push(parseInt(valueOneKeys[runner]))
            }

            //run both numbers
            runner++;
            runnerTwo++;
            runnerThree = 0;
        }else if(valueOneKeys[runner] < valueTwoKeys[runnerTwo]){
            // if one has the samller key, add its value x value times
            for(n=0;n < valueOneValues[runner]; n++){    
                finalArr.push(parseInt(valueOneKeys[runner]))
            }
            runner++;
        }else{
            // else same for two
            for(p=0;p < valueTwoValues[runnerTwo]; p++){    
                // finalArr.push(valueTwoValues[runnerTwo])
                finalArr.push(parseInt(valueTwoKeys[runnerTwo]))
            }
            runnerTwo++;
        }
    }
    return finalArr;
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));