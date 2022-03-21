// ITERATION : orignal
const intersectFirst = (arrLeft,arrRight) => {
    var intersection = []
    var long;
    var short;

    if(arrLeft.length > arrRight.length){
        long = arrLeft
        short = arrRight
    }else{
        long = arrRight
        short = arrLeft
    }

    var runner = long.length - 1;
    var runnerTwo = short.length - 1;

    while(runner >= 0){
        if(long[runner] === short[runnerTwo]){
            intersection.push(long[runner])
            runner--;
            runnerTwo--;
        }else if(long[runner] <  short[runnerTwo]){
            runnerTwo--;
        }else{
            runner--;
        }
    }
    return intersection;
}

// console.log(intersectFirst([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]))




// ITERATION TWO : going down
const intersectDown = (arrLeft,arrRight) => {
    var intersection = []
    var runner = arrLeft.length - 1;
    var runnerTwo = arrRight.length - 1;

    while(runner >= 0){
        if(arrLeft[runner] === arrRight[runnerTwo]){
            intersection.push(arrLeft[runner])
            runner--;
            runnerTwo--;
        }else if(arrLeft[runner] <  arrRight[runnerTwo]){
            runnerTwo--;
        }else{
            runner--;
        }
    }
    return intersection;
}


// console.log(intersectDown([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersectDown([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersectDown([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersectDown([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersectDown([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));



//ITERATION THREE : Going up
const intersectUp = (arrLeft,arrRight) => {
    var intersection = []
    var runner =  0;
    var runnerTwo = 0;

    while(runner <= arrLeft.length - 1 || runnerTwo <= arrRight.length - 1 ){
        if(arrLeft[runner] === arrRight[runnerTwo]){
            intersection.push(arrLeft[runner])
            runner++;
            runnerTwo++;
        }else if(arrLeft[runner] >  arrRight[runnerTwo]){
            runnerTwo++;
        }else{
            runner++;
        }
    }
    return intersection;
}

// console.log(intersectUp([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersectUp([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersectUp([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersectUp([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
// console.log(intersectUp([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
console.log(intersectUp([50,51,53],[1,2,3,4,50]));