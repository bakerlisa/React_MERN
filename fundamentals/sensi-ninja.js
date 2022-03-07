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
        return `Strength ${this.strength}, Speed ${this.speed}, Health ${this.health}%`
    }
    drinkSale(){
        this.health += 10;
        return `Gulp Gulp Gulp! That was delicous health is up by 10: Health ${this.health}%`
    }
}

class Sensi extends Ninja{
    constructor(){
        super()
    }

    speakWisdom(){
        Ninja.drinkSale()
        return `I am you sensi and have ${wisdom} wisdom`
    }
}

const ninja1 = new Ninja("Lisa",100,25,10);
// console.log(ninja1.sayHi())
// console.log(ninja1.drinkSale())
const sensi1 = new Sensi("Baker",200,10,10)
console.log(sensi1.speakWisdom())