const { faker } = require('@faker-js/faker');

class User{
    constructor(){
        this.color = faker.commerce.color();
        this.genre = faker.music.genre();
        this.first = faker.name.firstName()
    }
}

module.exports = User;