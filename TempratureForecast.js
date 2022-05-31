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


/* Step 1 Ask Questions To Yourself (Understanding the Problem) */

/* 1) How will we Add Degree celsius
    - copy it from google results
  2) How will we print day number for each array element in the string
   - by using for loop

Step 2 Break Big Problems into Small Problems (Divide & Rule)

1)Declare A Function To Accept Array & Print Normal String
2)Add Days using for loop variable
2)Declare Array 
3)Call Function

Step 3 Do Research

1) Copy degree celsius symbol from google search results */
