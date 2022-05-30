let exercisetotal = Number(prompt(`Enter The Total Number Of Exercises`));
let reps = Number(prompt(`Enter the reps for each exercise`));


for (let exercise = 1; exercise <= exercisetotal; exercise++) {
    console.log(`-----This is exercise number ${exercise}-----`);
    for (let rep = 1; rep <= reps; rep++) {
        console.log(`This is rep number ${rep} for exercise number ${exercise}`);
    }
}
