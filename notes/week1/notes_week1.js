// ======= MERN - stands for =======
// M - mongoDB
// E - express
// R - react
// N - node

// JS - For the borwser
//     -add more features

// ECMASCRIPT = JS
// NODE = JS not in the borwser
// REACT = node for the borwser
// ELECTRON = react thats not inside  of the browser (desktop apps)
// REACT NATIVE - reacte for/on phones
// MONGO - js database

// IT'S MADE FOR EVERYTHING ON EVERYTHING ABOUT EVERYTHING

// ============================== HOSITING / SCOPE ==============================

// function doThing(){
//     var hello = "hey!";
//     console.log(hello);
// }
// doThing();
// console.log(hello);

// 1. hositing - 
// 2. function scope - variables only work within the variable

// readable, understandble, and doesn't use weird corks

// function doThing(){
//     console.log(hello);
//     var hello = "hello!"
//     console.log(hey)
// }

// ========================= VAR variable do this (not let or const) =======================

function doThing(){
    // var hello;
    // console.log(hello);
    // hello = "hello!";
    // console.log(hey);
    for(i=0;i <100; i++){
        // do something or nothing but i will still be avaialbe outside of the for loop
    }
    console.log(i)
}

// doThing();

// ============================== LET ==============================
// Let - block scope, only within its scop ir the children of its scope, denoted by curly braces
    // - Not hoisted, can't call them before they're declared 
function doThingTwo(){
    // var hello;
    // console.log(hello);
    // hello = "hello!";
    // console.log(hey);
    for(let i=0;i <100; i++){
        // do something or nothing but i will still be avaialbe outside of the for loop
    }
    console.log(i)
}

// doThingTwo();

// ============================== CONST ==============================
// const - they don't change

const firstName = "Mike"
// firstName = "Lisa";
const iceCream = ['chocolate','vanilla','cookie dough,fudge,brownie']
// iceCream[0] = "strawberry";
// console.log(iceCream);

// why did this work? 
    // - you can't change the type, in this case an array to string or number or object

// ============================== DESTRUCTING ==============================
// pull values out and name to a var that already exsists

const [chocolate,other,] = iceCream;
// console.log(chocolate);

const sundea = {
    flavor: "vanilla",
    sauce: "hot fudge",
    toppings: ["cookies","rainbow","bananas","whipped cream"]
}

// console.log(sundea.toppings)
const [yellow] = sundea.toppings 

sundea.toppings[0] = "oreo";
//console.log(yellow) // already saved the value befreo we saved it so it wasn't updated

//console.log(sundea.toppings)

// value is not being removed but now we have an extra variable


// ============================== REST / SPREAD ==============================
// rest
const [first, ...others] = iceCream;
console.log(others);

// spread - spreads all thw values inside the array/object
// const newList = ["hot cheeto", iceCream]
// vrs
const newList = ["hot cheeto", ...iceCream,'jello']
console.log(newList)

const {flavor, ...fixings}  = sundea;
// console.log(fixings);

const superChocolate = {
    flavor: "chocolate",
    ...fixings
}
// console.log(superChocolate);