let arrOne = ['hitesh', 'wadhwa', 'Mumbai', 1, true];

for (let i = 0; i < 5; i++) {
    if (typeof arrOne[i] === 'number')
        break;
    else
        console.log(arrOne[i]);
}

/* Output 

hitesh
wadhwa
Mumbai  */

/* break statement completely terminates the loop unlike continue which only terminates the current iteration and moves on to the next iteration */
