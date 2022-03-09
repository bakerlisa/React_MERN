//TAMAMS SOLUTION
let ar1 = [10]
let ar2 = [2, 3, 6, 7, 8, 10]



let ar3 = []

let l1 = ar1.length - 1

let l2 = ar2.length - 1

let i = j = k = 0

while (i <= l1 && j <= l2) {
    if (ar1[i] >= ar2[j]) {
        ar3.push(ar2[j++])

    } else {
        ar3.push(ar1[i++])

    }
}

while (i <= l1) {
    ar3[k++] = ar1[i++]
}

while (j <= l2) {
    ar3[k++] = ar2[j++]
}

console.log(ar3)




// while(i<=l1 && j <=l2){
//     if(ar1[i] >= ar2[j]) {
//         ar3[k++] = ar2[j]
//         j++
//     }
//     else{
//         ar3[k++] = ar1[i]
//         i++
//     }
// }