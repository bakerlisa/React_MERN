const mergeSort = (arr) => {
    console.log(arr);
    if(arr.length <= 1) return arr;

    let leftArr = arr.slice(0, Math.floor(arr.length/2));
    let rightArr = arr.slice(Math.floor(arr.length/2));

    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    arr = combine(leftArr,rightArr);
    console.log(`combined: ${arr}`);
    return arr;
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));