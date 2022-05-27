'use strict';

function describeCountry(country, population, capitalCity) {

    let detail = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return detail;

}

let countryName = prompt(`What is the name of your country?`);
let countryPopulation = Number(prompt(`What is your country's population?`));
let countryCapital = prompt(`What is your country's capital?`);

let countryInfo = describeCountry(countryName, countryPopulation, countryCapital);
let countryInfo2 = describeCountry(`Germany`, 85000000, `Berlin`);
let countryInfo3 = describeCountry(`Australia`, 25000000, `Canberra`);

alert(countryInfo);
console.log(countryInfo);
console.log(countryInfo2);
console.log(countryInfo3);
