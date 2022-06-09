// Fliter method only returns elements whose conditions are satisfied

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const abc = movements.filter(function(text)
{
  return text > 0;
})

console.log(abc);

// Output

[200, 450, 3000, 70, 1300]
