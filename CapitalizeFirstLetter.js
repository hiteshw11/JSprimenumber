let str9=str8.split(' ');

console.log(str9);
let d='';
for (let j of str9)
{
    let a = (j);
    // console.log(a);
    let b=(a[0].toUpperCase())
    let c = a.slice(1);
    d=d+' '+b+c;
    
}

console.log(d);
