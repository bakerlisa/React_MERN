const { faker } = require('@faker-js/faker');

class Company{
    constructor(){
        this.company = faker.company.companyName();
        this.noun = faker.company.bsNoun();
        this.catch = faker.company.catchPhraseAdjective();
        this.description = faker.company.catchPhraseDescriptor();


    }
}

module.exports = Company;