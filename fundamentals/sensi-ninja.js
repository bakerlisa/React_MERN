class Ninja {
    constructor(name,health,speed = 3,strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayHi(){
        return `Hello ${this.name}!`
    }
    showStatus(){
        console.log(`Strength ${this.strength}, Speed ${this.speed}, Health ${this.health}%`)
    }
    drinkSale(){
        this.health += 10;
        console.log(`Gulp Gulp Gulp! That was delicous health is up by 10: Health ${this.health}%`)
    }
}

class Sensi extends Ninja{
    constructor(name,health,speed,strength,wisdom){
        super(name,health,speed,strength,wisdom = 10)
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.speed = strength;
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSale()
        return `I am you sensi and have ${this.wisdom} wisdom you have 0`;
    }
}

//NINJA
const ninja1 = new Ninja("Lisa",100,25,10);
// console.log(ninja1.sayHi())
// console.log(ninja1.drinkSale())


// SENSI
const sensi1 = new Sensi("Baker",200,10,10)
console.log(sensi1.speakWisdom())