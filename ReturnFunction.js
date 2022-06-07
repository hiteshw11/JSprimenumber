'use strict';

let a;

function greet(greeting)
{
    return function a(b) { 
        console.log(`Yo Whats Up Beyotch ${b}`);
    }
}


let cons = greet;

cons('Good Morning')('Jason')


Output

Yo Whats Up Beyotch Jason
