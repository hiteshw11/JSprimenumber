'use strict';

let cAge = Number(prompt(`Enter Your current Age`));
let retirementAge = Number(prompt(`Enter Your Country's Retirement Age`));

const yearsLeft = currentAge => retirementAge - currentAge;

const timeLeftWorking = yearsLeft(cAge);

alert(`The number of years left until retirement are ${timeLeftWorking}`);
console.log(`The number of years left until retirement are ${timeLeftWorking}`);
