let Jonas = {

    firstName: 'Jonas',
    LastName: 'Schmedtmann',
    job: 'Teacher',
    location: 'Portugal',
    friends: ['Michael', 'Peter', 'Steven']

}


const interestedIn = prompt(`What do you wish to know about Jonas?`);
console.log(Jonas[interestedIn]);


let finalSt = `${Jonas.firstName} has ${Jonas.friends.length} friends and his best friend is called ${Jonas.friends[0]}`;

console.log(finalSt);
