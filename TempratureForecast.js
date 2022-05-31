let arr1 = [17, 21, 23];   // list of tempratures on Day 1, Day2, .... (Example One)
let arr2 = [12, 5, -5, 0, 4]; // list of tempratures on Day 1, Day2, .... (Example Two)

let temp = function (arrValue) {
  let str1 = '';
  for (let i = 0; i < arrValue.length; i++) {
    let str2 = `Temprature will be ${arrValue[i]}°C on Day ${i + 1}...`;
    str1 = str1 + str2;
  }
  return str1;
};

console.log(temp(arr1));
console.log(temp(arr2));
