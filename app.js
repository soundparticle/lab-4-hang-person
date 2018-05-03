// var canvas = document.getElementById('container-body');
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);


var letterBankMaster = 'abcdefghijklmnopqrstuvwxyz';
//  plan for replayability
var letterBank = letterBankMaster.split('');
var lettersGuessed = [];
var failedAttempts = 0;
var wordToGuess = 'prince';

//  Main game body
function guessLetter() {
    console.log('we did it!');

    var userInput = document.getElementById('letter').value.toLowerCase();
    console.log(userInput);
    var userIndex = (letterBank.indexOf(userInput));
    console.log(letterBank.indexOf(userInput));
    if(userIndex === (-1)) {
        alert('Guess an unguessed letter!');
        console.log('letterBank ', letterBank);
        return;
    }
    else if(wordToGuess.indexOf(userInput) !== (-1)) {
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);
    
        //  Update guessed letters
        var displayGuessed = document.getElementById('container-guessed');
        displayGuessed.textContent = lettersGuessed;

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);
    }
}



console.log(letterBankMaster);
console.log(letterBank);
console.log(lettersGuessed);
console.log(failedAttempts);
console.log(wordToGuess);




