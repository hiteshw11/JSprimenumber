// Map function does not make changes in current array instead creates and returns a new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lmn = movements.map(function (mov,i,arr)
{
  return mov >0 ? `You have deposited ${mov} dollars`: `You have withdrawn ${mov} dollars`;
});

console.log(lmn);


// Output

0: "You have deposited 200 dollars"
1: "You have deposited 450 dollars"
2: "You have withdrawn -400 dollars"
3: "You have deposited 3000 dollars"
4: "You have withdrawn -650 dollars"
5: "You have withdrawn -130 dollars"
6: "You have deposited 70 dollars"
7: "You have deposited 1300 dollars"
