let exercisetotal = Number(prompt(`Enter The Total Number Of Exercises`));
let reps = Number(prompt(`Enter the reps for each exercise`));


for (let exercise = 1; exercise <= exercisetotal; exercise++) {
    console.log(`-----This is exercise number ${exercise}-----`);
    for (let rep = 1; rep <= reps; rep++) {
        console.log(`This is rep number ${rep} for exercise number ${exercise}`);
    }
}

/* Output
Enter The Total Number Of Exercises
2

Enter the reps for each exercise
3

-----This is exercise number 1-----
This is rep number 1 for exercise number 1
This is rep number 2 for exercise number 1
This is rep number 3 for exercise number 1
-----This is exercise number 2-----
This is rep number 1 for exercise number 2
This is rep number 2 for exercise number 2
This is rep number 3 for exercise number 2
*/
