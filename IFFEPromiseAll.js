(async (c1,c2,c3) =>
{
const abc = await Promise.all([
    getJSON(`https://restcountries.com/v2/name/${c1}`),
    getJSON(`https://restcountries.com/v2/name/${c2}`),
    getJSON(`https://restcountries.com/v2/name/${c3}`)])

console.log(abc);

})('Japan','Libya','Bhutan');
