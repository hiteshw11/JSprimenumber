let hasDriversLicense = prompt(`Does Sarah have a Driving license?`);
if (hasDriversLicense == `yes`) {
    hasDriversLicense = true;
}
else {
    hasDriversLicense = false;
}

let hasGoodVision = prompt(`Does Sarah have a good vision?`);
if (hasGoodVision == `yes`) {
    hasGoodVision = true;
}
else {
    hasGoodVision = false;
}


if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah can drive`);
    alert(`Sarah Can Drive`);
}
else {
    console.log(`Someone else should drive`);
    alert(`Sarah You cannot Drive`);
}
