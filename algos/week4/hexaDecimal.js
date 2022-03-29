// 0 1 2 3 4 5 6 7 8 9 A B C D E F 

const hexadecimal = (str) =>{
    var expo = 0;
    var total = 0;
    var obj = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 }

    for(i=str.length - 1; i>=0;i--){
        total += obj[str[i]] * 16 ** expo
        expo++;
    }

    return total;
}

// console.log(hexadecimal("1D2")); 
// console.log(hexadecimal("2C1")); 
// console.log(hexadecimal("3B5")); 
// console.log(hexadecimal("FFF")); 


const decToHexStr = (str) =>{
    var base = 0
    var reminder;
    var hex = "";

    var obj = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": "A", "11": "B", "12": "C", "13": "D", "14": "E", "15": "F" }

    if(str / 16 > 0){
        base = Math.floor(str / 16)
        hex += base;
    }

    // if(str - (Math.floor(base * 16)) < 16){
    //     reminder = obj[str - (Math.floor(base * 16))] 
    //     hex += reminder
    // }
    return hex;
}


decToHexStr(108); // 6c
// console.log(decToHexStr(108)); // 6c
console.log(decToHexStr(420)); //1A4