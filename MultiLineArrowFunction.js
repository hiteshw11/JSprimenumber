'use strict';

const bYear = Number(prompt(`Enter Your Birth Year`));
const currentYear = Number(prompt(`Enter The Current Year`));
const rAge = Number(prompt(`Enter Your Country's Retirement Age`));

const yearsLeft = (birthYear, retirementAge) => {
    let currentAge = currentYear - birthYear;
    let workingYears = retirementAge - currentAge;
    return workingYears;
}

const remainingYears = yearsLeft(bYear, rAge);

alert(`The Number Of Years Left Until Retirement are ${remainingYears}`);

console.log(`The Number Of Years Left Until Retirement are ${remainingYears}`);
