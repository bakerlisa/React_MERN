const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// PRE / TEST
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
const pkmnIds = pokémon.map( p => p.id )

// 1.
// const pkmnIdByThree = pokémon.filter( p => p.id % 3 === 0);
// console.log(pkmnIdByThree);

// 2. 
// const pkFire = pokémon.filter(p => p.types = "fire");
// console.log(pkFire);

// 3. 
// const pkDoubleTypes = pokémon.filter(poke => poke.types.length > 1 );
// console.log(pkDoubleTypes);

// 4. 
// const pkmnNames = pokémon.map( p => p.name);
// console.log(pkmnNames);

// 5. 
// const pkmnNamesGreaterHundred = pokémon.filter(p => p.id > 99).map(p => p.name);
// console.log(pkmnNamesGreaterHundred)

// 6. 
// const pkmnOnlyPoision = pokémon.filter(p => p.types.length < 2).filter(p => p.types == "poison");
// console.log(pkmnOnlyPoision);

// 7.