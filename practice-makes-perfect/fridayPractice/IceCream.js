const { faker } = require('@faker-js/faker');

class IceCream{
    constructor(){
        const toppings = ["whipped cream", "jelly beans", "mashmellows","hot fudge","carmel","sprinkles","rainbows","Cookie crumbs","cinnamon","honey"]

        this.toppings = toppings[Math.floor(Math.random() * toppings.length)]
        this.name = faker.name.findName();
        this.animal = faker.animal.dog();
        this.hacker = faker.hacker.noun();
        this.helpers = faker.helpers.createTransaction()
        this.job = faker.name.jobArea();
    }
}

module.exports = IceCream;