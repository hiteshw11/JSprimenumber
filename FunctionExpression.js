// function expression

let countryN = prompt(`What is the name of your country?`);
let countryP = Number(prompt(`What is your country's population?`));
let countryC = prompt(`What is your country's capital?`);


let country1 = function (countryName, countryPopulation, countryCapital) {
    return `The ${countryName} has ${countryPopulation} people and its capital is ${countryCapital}`;
}

let finalInfo = country1(countryN, countryP, countryC);
alert(finalInfo);
console.log(finalInfo);
