// TEST TWO PANGRAMS

const isPangram = (str) => {
    var pangram = {};
    var exclude = [",", ".",'"',"'","!","?"," "];
    var goodChar = false;

    str = str.toUpperCase();
    for(x=0;x<str.length;x++){
        goodChar = false
        for(y=0;y < exclude.length; y++){
            // console.log(`${str[x]} ${exclude[y]} ${goodChar}`)
            if(str[x] === exclude[y]){
                break;
            }else{
                goodChar = true
            }
            //goes through the exclude list and toggles trus or false for that cahracter
        }
        
        // if its not in our object, is false, and not a comma, add to our object
        if(!pangram[str[x]] && goodChar === true && str[x] != "," && str[x] != "."){
            pangram[str[x]] = true
        }
    }
    console.log(pangram)
    //Checks to make sure there are 26 characters
    return Object.keys(pangram).length === 26 ? true : false; 
}

// getting false? - no h?
console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
// console.log(isPangram("The quick brown fox jumps over the lazy sleeping dog"));//missing x, returns false
// console.log(isPangram("Sphinx of black quartz, judge my vow"));
// console.log(isPangram("A"));




const isPerfectPangram = (str) => {
    var isPerfect = false;
    var pangram = {};
    var exclude = [",", ".",'"',"'"," ","!","?"];
    var goodChar = false;

    str = str.toUpperCase();
    for(x=0;x<str.length;x++){
        goodChar = false
        for(y=0;y < exclude.length; y++){
            //goes through the exclude list and toggles trus or false for that cahracter
            str[x] != exclude[y] ? goodChar = true : goodChar = false
        }
        
        // if its not in our object, is false, and not a comma, add to our object
        if(!pangram[str[x]] && goodChar && str[x] != "." && str[x] != ","){
            pangram[str[x]] = true
        }else if(pangram[str[x]]){
            // if letter is in pangram, return false
            return false
        }
    }

    //Checks to make sure there are 26 characters
    return Object.keys(pangram).length === 26 ? true : false; 
}

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
// console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
// console.log(isPerfectPangram("The five boxing wizards jump quickly."))