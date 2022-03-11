//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    // console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}

// console.log(partition([6,4,5,2,8,14,1,3]));

//time for recursion again!!
//partition your array, then quickSort the left half
//and the right half.
//Each half should be partitioned and quickSorted recursively.
const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivi = partition(arr);
    let leftSide = arr.slice(0,pivi);
    let rightSide = arr.slice(pivi + 1)
    
    let leftHalf = quickSort(leftSide);
    let rightHalf = quickSort(rightSide);

    return [...leftHalf, arr[pivi], ...rightHalf]
}

console.log(quickSort([7,45,2,67,3,2,1]));