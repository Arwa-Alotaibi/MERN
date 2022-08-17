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
    
//an array of pokémon objects where the id is evenly divisible by 3
const divisible_three = pokémon.filter( val => val.id %3===0 );
console.log("divisible_three"+''+divisible_three)

//an array of pokémon objects that are "fire" type
const fire_type = pokémon.filter(val=>val.types=='fire');
console.log('fire_type')
console.log(fire_type)

//an array of pokémon objects that have more than one type
const more_type = pokémon.filter(val=>val.types.length>1);
console.log('more_type')

console.log(more_type)

//an array with just the names of the pokémon
const name_pokemon = pokémon.map(val =>val.name);
console.log('name_pokemon')
console.log(name_pokemon)
//an array with just the names of pokémon with an id greater than 99
 const greater_than =pokémon.filter(val=>val.id>99).map(val =>val.name)
console.log('greater_than')
console.log(greater_than)

//an array with just the names of the pokémon whose only type is poison
const type_poison = pokémon.map(val =>val.name).filter(val=>val.type= "poison")
console.log('type_poison')
console.log(type_poison)

//an array containing just the first type of all the pokémon whose second type is "flying"
const type_flying =pokémon.filter(val =>val.types[1]==="flying")
console.log('type_flying')
console.log(type_flying)

//a count of the number of pokémon that are "normal" type
const count = pokémon.filter(val=>val.types.includes('normal')).length;
console.log("count")
console.log(count)