const clockAngles = (minutes) => {
    var hr = 0;
    var min = 0;
    var div = minutes
    // var hour = 1deg moves .5deg every minute
    // var minute = 1deg = 6deg every minute
    // var hour = (((minutes / .5) / 60) / 12)
    // var minute = ((minutes * 6) / 60)

    // if(minutes % 30 === 0){
    //     hr = minutes / 30
    // }
    // if(minutes % 6 === 0){
    //     min = minutes / 6 / 12
    // }

    // whole hr tick
    while(div - 30 >= 0){
        hr++
        hr + 1 > 12 ? hr = 0 : hr++
        div -= 30; 
    }

    if(div > 0){
        // remaining numbers and figure where the exact minutes
        console.log("degrees left " + div)
        console.log(div * 6)
        min = div * 6
    }else{
        min = 0
    }

    console.log(hr);
    console.log(min);

    var time = `${hr} : ${min}`
    return time;
}

// clockAngles(360)
// console.log(clockAngles(360))
// console.log(clockAngles(180))
// console.log(clockAngles(210))
console.log(clockAngles(588))
// console.log(clockAngles(980))
// console.log(clockAngles(361))

// 6deg = 1min
// 30deg = 1hr