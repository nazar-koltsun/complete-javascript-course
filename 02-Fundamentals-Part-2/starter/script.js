// Functions

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const countryUkraine = describeCountry('Ukraine', 39, 'Kyiv');

// console.log(countryUkraine);

// Function Declarations vs. Expressions
// const populationWorld = 7900;
// const populationUkraine = 39;
// const populationGermany = 80;

// function percentageOfWorld1(population) {
//   return population / populationWorld * 100
// }

// const percentageUkraine = percentageOfWorld1(populationUkraine);
// console.log('percentageUkraine', percentageUkraine);

// const percentageOfWorld2 = function(population) {
//   return population / populationWorld * 100
// }

// const percentageGermany = percentageOfWorld2(populationGermany);
// console.log('percentageGermany', percentageGermany);

// const percentageOfWorld3 = population => population / populationWorld * 100;

// const percentageGermany2 = percentageOfWorld3(populationGermany);
// console.log('percentageGermany2', percentageGermany);

// Functions Calling Other Functions
// const populationWorld = 7900;

// function percentageOfWorld1(population) {
//   return population / populationWorld * 100
// }

// const describePopulation = (country, population) => {
//   const perentageOfWorld = percentageOfWorld1(population);

//   return `${country} has ${population} million people, which is about ${perentageOfWorld.toFixed(1)}% of the world.`
// }

// console.log(describePopulation('China', 1441));
// console.log(describePopulation('Ukraine', 39));

// Coding Challenge #1
// const scoreDolphins = [44, 23, 71];
// const scoreKoalas = [65, 54, 49];

// const scoreDolphins = [85, 54, 41];
// const scoreKoalas = [23, 34, 27];

// const calcAverage = (scoresArr) => {
//   const sum = scoresArr.reduce((acc, current) => acc + current, 0);
//   return sum / scoresArr.length;
// }

// const avgDolhins = calcAverage(scoreDolphins);
// const avgKoalas = calcAverage(scoreKoalas);

// console.log('avgDolhins', avgDolhins);
// console.log('avgKoalas', avgKoalas);

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins / 2 >= avgKoalas) {
//     console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`)
//   } else if (avgKoalas / 2 >= avgDolhins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
//   }
// }

// console.log(checkWinner(avgDolhins, avgKoalas));

// Introduction to Arrays

// const populations = [5, 13, 39, 198];
// console.log(populations.length === 4);
// const populationWorld = 7900;

// function percentageOfWorld1(population) {
//   return population / populationWorld * 100
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// const neighboursOfUkraine = ['Polang', 'Romania', 'Moldowa'];
// neighboursOfUkraine.push('Utopia');

// console.log(neighboursOfUkraine);
// neighboursOfUkraine.pop();
// console.log(neighboursOfUkraine);

// if (!neighboursOfUkraine.includes('Germany')) {
//   console.log('Probably not a central European country 🇪🇺')
// }

// const indexOfPoland = neighboursOfUkraine.indexOf('Polang');
// neighboursOfUkraine[indexOfPoland] = 'Republic of Poland';

// console.log(neighboursOfUkraine);

// Coding Challenge #2

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// for (let i=0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]))
//   total.push(bills[i] + tips[i]);
// }

// console.log('bills', bills);
// console.log('tips', tips);
// console.log('total', total);

// Introduction to Objects
// const myCountry = {
//   country: 'Ukraine',
//   capital: 'Kyiv',
//   language: 'ukrainian',
//   population: 39,
//   neighbours: ['Poland', 'Moldova', 'Romania', 'Belaruss', 'Russia'],
// }

// Dot vs. Bracket Notation
// const myCountry = {
//   country: 'Ukraine',
//   capital: 'Kyiv',
//   language: 'ukrainian',
//   population: 39,
//   neighbours: ['Poland', 'Moldova', 'Romania', 'Belaruss', 'Russia'],
// }

// myCountry.population += 2;
// myCountry['population'] -= 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.'`)

// LECTURE: Object Methods
// const myCountry = {
//   country: 'Ukraine',
//   capital: 'Kyiv',
//   language: 'ukrainian',
//   population: 39,
//   neighbours: ['Poland', 'Moldova', 'Romania', 'Belaruss', 'Russia'],

//   describe: function() {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   },

//   checkIsland: function() {
//     this.isIsland = this.neighbours.length ? false : true;
//   }
// }

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry)

// Coding Challenge #3
// const dataMarkMiller = {
//   fullname: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.BMIvalue = this.mass / this.height ** 2;
//     return this.BMIvalue;
//   }
// }

// const dataJohnSmith = {
//   fullname: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.BMIvalue = this.mass / this.height ** 2;
//     return this.BMIvalue;
//   },
// }

// console.log('dataJohnSmith.bmi', dataJohnSmith.bmi);

// dataMarkMiller.calcBMI();
// dataJohnSmith.calcBMI();

// if(dataMarkMiller.BMIvalue > dataJohnSmith.BMIvalue) {
//   console.log(`Mark's BMI (${dataMarkMiller.BMIvalue}) is higher than John's (${dataJohnSmith.BMIvalue})!`)
// } else if (dataJohnSmith.BMIvalue > dataMarkMiller.BMIvalue) {
//   console.log(`John's BMI (${dataJohnSmith.BMIvalue}) is higher than Mark's (${dataMarkMiller.BMIvalue})!`)
// } else {
//   console.log(`John's BMI (${dataJohnSmith.BMIvalue}) is eagual to Mark's (${dataMarkMiller.BMIvalue})!`)
// }

// Looping Arrays, Breaking and Continuing

// function percentageOfWorld1(population) {
//   return population / populationWorld * 100
// }
// const populations = [5, 13, 39, 198];
// const populationWorld = 7900
// const percentages2 = [];

// for(let i=0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// Looping Backwards and Loops in Loops
// const listOfNeighbours = [
//   ['Canada', 'Mexico'], 
//   ['Spain'], 
//   ['Norway', 'Sweden', 'Russia']
// ];

// for (let i=0; i < listOfNeighbours.length; i++) {
//   for(let j=0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
//   }
// }


// The while Loop
// function percentageOfWorld1(population) {
//   return population / populationWorld * 100
// }
// const populations = [5, 13, 39, 198];
// const populationWorld = 7900
// const percentages3 = [];

// let i = 0;

// while(i < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[i]));
//   i++;
// }

// console.log(percentages3);

// Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const calcAverage = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// }

// for (let i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log('bills', bills);
// console.log('tips', tips);
// console.log('totals', totals);
// console.log('Avarage totals', calcAverage(totals));

