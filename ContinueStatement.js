let arrOne = ['hitesh', 'wadhwa', 1, true];
for (let i = 0; i < 4; i++) {
    if (typeof arrOne[i] === 'string')
        continue;

    else {
        console.log(arrOne[i]);
    }
}


/* Output

1
true
*/
