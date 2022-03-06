// 1. PREDICTION: world, OUTPUT: undefined
console.log(hello);                                   
var hello = 'world';                                 
// --------
var hello = 'world'; 
console.log(hello);      


// 2. PREDICTION: error, OUTPUT: magnet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// --------
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// 3. PREDICTION: super cool, OUTPUT: super cool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// --------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4. PREDICTION: undefined, OUTPUT: chicken, halkf-chicken
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// --------
var food = 'chicken';
eat();
console.log(food);
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

// 5. PREDICTION: chicken,chicken,error, OUTPUT: error
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// --------
var mean = function() {
    var food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
mean();
console.log(food);
console.log(food);

// 6. PREDICTION: disco,disco,rock,rock, OUTPUT: undefined,rock,r&b, disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// --------
var genre = "disco";
function rewind() {
    var genre = "r&b";
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
console.log(genre);
console.log(genre);
rewind();

// 7. PREDICTION: san jose,seattle,burbank,san jose, OUTPUT: san jose,seattle,burbank,san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// --------
dojo = "san jose";
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);

// 8. PREDICTION: true, closed for now, OUTPUT: { name: 'Chicago', students: 65, hiring: true }, error
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// --------
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));