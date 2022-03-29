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
    
    //finding the highest power (minus 1)
    while(Math.pow(2,power) <= dec){
        power++;
    }

    // looping through that backwards (like in the first algo)
    for(i=power - 1; i >= 0;i--){
        // if the power minus our "runner" greater than zero add zero && reset the running total
        if((newTotal - Math.pow(2,i)) >= 0 ){
            binary += 1;
            newTotal = newTotal-Math.pow(2,i)
        }else{
            //else add zero and minus the power
            binary += 0;
        }
    }

    return binary;
}

// console.log(decimalToBinary("21"))
  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"

  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work


function decimalToBinaryTwo(dec){
    var power = 0;
    var binary = "";
    var newTotal = dec
    
    //finding the highest power (minus 1)
    while(dec/2 >= 0){
        dec /=2
        console.log(dec)
        power++;
        break
    }

    // looping through that backwards (like in the first algo)
    for(i=power - 1; i >= 0;i--){
        // if the power minus our "runner" greater than zero add zero && reset the running total
        if((newTotal - Math.pow(2,i)) >= 0 ){
            binary += 1;
            newTotal = newTotal-Math.pow(2,i)
        }else{
            //else add zero and minus the power
            binary += 0;
        }
    }
    // console.log(binary)
    return binary;
}
console.log(decimalToBinaryTwo("21"))