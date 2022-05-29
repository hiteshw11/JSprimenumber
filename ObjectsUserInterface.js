let firstN = prompt('Enter Your First Name');
let lastN = prompt('Enter Your Last Name');
let jobH = prompt('Enter Your Job');


let Hitesh =
{
    firstName: firstN,
    lastName: lastN,
    job: jobH
}

console.log(Hitesh);
let detail = prompt(`What would you like to know about Hitesh?`);
console.log(Hitesh[detail]); // cannot use Hitesh.detail or Hitesh['detail'] because then it will  look for detail property in Hitesh object and return undefined
