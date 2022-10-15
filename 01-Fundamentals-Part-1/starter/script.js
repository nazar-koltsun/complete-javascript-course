// const populationOfUkraine = 39;
// const avaragePopulation = 33;

// if (populationOfUkraine > avaragePopulation) {
//   console.log(`Ukraine's population is above average`)
// } else {
//   console.log(`Ukraine's population is ${avaragePopulation - populationOfUkraine} million below average`);
// }

// Challenge #1
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // console.log(BMIMark, BMIJohn, markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//   console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`)
// }

// const numNeighbours = +prompt('How many neighbour countries does your country have?');

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// Challenge #2
// const averageScoreDolphins = 99;
// const averageScoreKoalas = 99;
// const minimumScore = 100;

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > minimumScore) {
//   console.log('Dolphins win');
// } else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas > minimumScore) {
//   console.log('Koalas win');
// } else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= minimumScore) {
//   console.log('Draw');
// }

// The switch Statement
// const language = 'ukraine';

// switch(language) {
//   case 'chinese':
//   case 'mandarin':  
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default: 
//     console.log('Great language too :D');
// }

// The Conditional (Ternary) Operator

// const populationOfUkraine = 30;
// const avaragePopulation = 33;

// populationOfUkraine > avaragePopulation ? console.log('Ukraine\'s population is above average') : console.log('Ukraine\'s population is below average')

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value.Createa variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value,the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);