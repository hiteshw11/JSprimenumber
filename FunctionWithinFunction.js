'use strict';


let cutMachine = function (numberOfFruits) {
    return numberOfFruits * 4;
}

let fruitProcessor = function (numberOfApples, numberOfOranges) {
    let choppedApples = cutMachine(numberOfApples);
    let choppedOranges = cutMachine(numberOfOranges);
    let finalPieces = `Juice With ${choppedApples} Apple Pieces and ${choppedOranges} Orange Pieces is made`;
    return finalPieces;
}

let finalOutput = fruitProcessor(4, 2);
console.log(finalOutput);
