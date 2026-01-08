const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc = ["Superman" , "Flash", "Batman"]

// marvel_heroes.push(dc)
// console.log(marvel_heroes);

marvel_heroes.concat(dc)
console.log(marvel_heroes);

const all_heroes = [...marvel_heroes, ...dc]
console.log(all_heroes);



