function thisIsNew(string1,func)
{
    return `Hello ${string1} Your name in upper case is ${func(string1)}`
}


function func(stringer)
{
   return stringer.toUpperCase();
}

const a =thisIsNew('Johnny',func);

console.log(a);
