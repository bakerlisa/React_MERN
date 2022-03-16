//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    var newString = "";
    var usedStrs = [];

    for(var i = str.length-1; i >= 0; i--){
        for(var x = 0; x <= usedStrs.length; x++){
            //console.log(str[i])
            //console.log(usedStrs[x])

            if(str[i] != usedStrs[x]){
                usedStrs.push(str[i])
                newString =  str[i] + newString ;
                console.log(newString)
                break;
            }
        }
        // console.log(usedStrs)
        // console.log(newString)
    }
    
}



console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));