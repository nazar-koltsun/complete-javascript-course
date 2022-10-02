const country = 'Ukraine';
const continent = 'Europe';
let population = 39;


const isIsland = false;
const language = 'ukrainian';

console.log('isIsland', typeof isIsland);
console.log('population', typeof population);
console.log('country', typeof country);
console.log('language', typeof language);

console.log(population / 2);
console.log(++population);
console.log(population > 6);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' +  language;
console.log(description);