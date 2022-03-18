const { faker } = require('@faker-js/faker')
class Order{
    constructor(){
        const bases = ["espresso shot","creamer","ice","milk","water","dark roast","light roast","drip","columbian","french raost","chai tea","black tea","green tea"];

        const additives = ["vanilla","ice cream","sugar","splenda","pre workout","chocolate","carmel","protien powder","cinnamon","honey","jameson","more water","milk","creamer","pumin spice","coca-cola"]

        const toppings = ["sprinkles","whipped cream","un-whipped cream","cinnamon","nutmeg","plain","marshmellows"]

        this.coffeeShop = faker.company.companyName() + "Coffee Shop"
        this.barista = faker.image.avatar();
        this.name = faker.name.findName();
        this.base = bases[Math.floor(Math.ranom() * bases.length)];
        this.additives = additives[Math.floor(Math.ranom() * additives.length)];
        this.toppings = toppings[Math.floor(Math.ranom() * toppings.length)];
        this.cost = "$" + faker.finance.amount();
    }
}

export.modules