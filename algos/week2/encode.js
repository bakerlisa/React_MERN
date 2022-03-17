const encode = (str) =>{
    var solutions = {}
    var returnString = ""

    for(i=0;i< str.length;i++){
        if(solutions[str[i]]){
            //else add a 1 to the value
            solutions[str[i]] = solutions[str[i]]+1 
        }else{
            // key doens't exsist then set it up with a one value
            solutions[str[i]] = 1
        }
    }

    // sets up our string for ouput
    var keyValue = Object.keys(solutions)

    for(j=0;j < keyValue.length; j++){
        returnString += keyValue[j]+= solutions[keyValue[j]]    
    }
    return returnString;
}

console.log(encode('aaabbbcccccddeddeeee'))
// encode('aaabbbcccccddeddeeee')
// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bbzxcesrt"));

const decode = (str) => {
    var newObj = {}
    var num;
    var temp = "";
    var returnString = "";

    // sets up an object from the string we're given
    for(x=0;x<str.length;x++){
        if(isNaN(str[x])){
            //set object key, sets a temp to keep track of where the numbers go, and resets num value
            temp = str[x];
            newObj[str[x]] = 0;
            num = 0;
        }else{
            // adds to the key value, we know that we add ALL the numbers after each letter, but not if its its not the first number
            if(num === 0 && num.length === 1){
                //we don't want 01 - is messes with the for loop, so this is to remove the 0
                newObj[temp] = str[x]
            }else{
                newObj[temp] += str[x]
            }
        }
    }

    // gets all the kets and loops through them adding a letter for every key
    var keyValues = Object.keys(newObj);
    for(j=0;j < keyValues.length; j++){
        for(m=0;m<newObj[keyValues[j]];m++ ){
            //adds a letter based on the amount of number there are
            returnString += keyValues[j];
        }   
    }
    return returnString
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));
// console.log(parseInt("432"));
// console.log(parseInt2("432"));