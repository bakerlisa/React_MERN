//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    var newString = "";
    var rotate = str.length - 1;

    for(let x = 0; x < str.length ;x++){
        if(x >= str.length - num){
            newString = str[rotate] + newString;
            rotate--;
        }else{
            newString += str[x];
        }
    }
    return newString;
}

// let testString = "012345";
// console.log(rotateString(testString, 3));

// let shoes = "Did I shine my shoes today?";
// console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2,num=0) => {
    var rotate = num
    var same;
    str1 = rotateString(str1,rotate);

    for(x=0;x < str2.length && str1.length === str2.length; x++){
        if(str2[x] === str1[x]){
            console.log(str1[x] + " : " + str2[x])
            same = "true";
        }else{
            same = "false";
            rotate++;
            break;
        }
    }
    
    console.log(rotate)
    console.log(str2.length)
    if(rotate < str2.length){
        isRotation(str1,str2,rotate)
    }
    console.log("same: " + same)

    //return same;
}

isRotation("es today?Did I shine my sho", "es today?Did I shine my sho");
// console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));