let friends = ['John', 'Sam', 'Mike', 'Peter'];
console.log(friends);
console.log(friends.length);
friends.push('William');  // after pushing, the push function also returns the length of array
console.log(friends);
console.log(friends.unshift('Matt')); // after unshift, the push function also returns the length of array
console.log(friends);
friends.pop(); // after pop, the pop function returns the deleted element, if you want that you will have to take it in a varaiable
console.log(friends);
friends.shift();
console.log(friends);
let val = friends.includes('John'); // returns value in true or false.
console.log(val); // You can also directly put in console.log
