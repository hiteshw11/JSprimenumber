let populations = [6, 120, 360, 35]
let num = 0;
worldPop = 7900;
function percentageOfWorld2(population, worldPop) {
    return (population / worldPop) * 100;
}

while (populations.length !== num) {
    console.log(percentageOfWorld2(populations[num], worldPop));
    num++;
}

/* Output

0.0759493670886076
1.5189873417721518
4.556962025316456
0.44303797468354433
*/
