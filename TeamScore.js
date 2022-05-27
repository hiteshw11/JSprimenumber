let dolphinsScoreOne = Number(prompt(`Enter The First Score Of Dolphin Team`));
let dolphinsScoreTwo = Number(prompt(`Enter The Second Score Of Dolphin Team`));
let dolphinsScoreThree = Number(prompt(`Enter The Third Score Of Dolphin Team`));

let dolphinsAvgScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;


let KoalasScoreOne = Number(prompt(`Enter The First Score Of Koala Team`));
let KoalasScoreTwo = Number(prompt(`Enter The Second Score Of Koala Team`));
let KoalasScoreThree = Number(prompt(`Enter The Third Score Of Koala Team`));

let KoalasAvgScore = (KoalasScoreOne + KoalasScoreTwo + KoalasScoreThree) / 3;

console.log(`The Average Score of 
Dolphins ${dolphinsAvgScore}
Koalas ${KoalasAvgScore}`);

alert(`The average score of Dolphins Team is ${dolphinsAvgScore}`);
alert(`The average score of Dolphins Team is ${KoalasAvgScore}`);

if (dolphinsAvgScore > KoalasAvgScore && dolphinsAvgScore > 100) {
    console.log(`Dolphins with an average score of ${dolphinsAvgScore} are the winners`);
    alert(`Dolphins Are The Winners`);
}
else if (KoalasAvgScore > dolphinsAvgScore && KoalasAvgScore > 100) {
    console.log(`Koalas with an average score of ${KoalasAvgScore} are the winners`);
    alert(`Koalas Are The Winners`);
}
else if (dolphinsAvgScore < 100 && KoalasAvgScore < 100) {
    console.log(`No Team Has Avg Score Greater Than 100`);
    alert(`No Team Has Avg Score Greater Than 100`);
}
else if (dolphinsAvgScore > 100 && KoalasAvgScore > 100 && dolphinsAvgScore === KoalasAvgScore) {
    console.log(`The Match is Tied`);
    alert(`The Match is Tied`);
}
