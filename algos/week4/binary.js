// AS ANUMBER
function binaryToDecimal(binary){
    var digits = binary.toString().split('');
    var realDigits = digits.map(Number)
    var runner = 0;
    var total = 0;

    for(i=realDigits.length-1;i>=0;i--){
        if(realDigits[i] === 1){
            total += Math.pow(2,runner)  
        }
        runner++;
    }
    return total;
}

// USING A STRING
function binaryToDecimalTwo(binary){
    var runner = 0;
    var total = 0;
    for(i=binary.length-1;i>=0;i--){
        if(binary[i] === "1"){
            total += Math.pow(2,runner)  
        }
        runner++;
    }
    return total;
}
// console.log(binaryToDecimalTwo("1101101"))
// console.log(binaryToDecimalTwo("100"))
// console.log(binaryToDecimalTwo("10101"))
// binaryToDecimalTwo(1101101)



// Decimal to Binary
// Given a (whole) number, return the value in binary
function decimalToBinary(dec){
    var power = 0;
    var binary = "";
    var newTotal = dec
    
    while(Math.pow(2,power) <= dec){
        power++;
    }

    for(i=power - 1; i >= 0;i--){
        if((newTotal - Math.pow(2,i)) >= 0 ){
            binary += 1;
            newTotal = newTotal-Math.pow(2,i)
        }else{
            binary += 0;
        }
    }
    return binary;
}

decimalToBinary(21)
// console.log(decimalToBinary("1101101"))
  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"

  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work