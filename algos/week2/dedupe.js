//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    var newString = "";
    var usedStrs = [];

    for(let i = str.length; i > 0; i--){
        for(let x = 0; usedStrs.length < x; x++){
            console.log('hello')
        }
    }
}

console.log("hello")

console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));