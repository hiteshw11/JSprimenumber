let arrOne = [];
const num = prompt(`How many elements you wish to push?`);

for (let i = 0; i < num; i++) {
    arrOne[i] = prompt(`Enter the number`);
}

for (let i = 0; i < num; i++) {
    console.log(arrOne[i], typeof (arrOne[i]));
}
