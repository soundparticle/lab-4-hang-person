// var canvas = document.getElementById('container-body');
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);


var letterBankMaster = 'abcdefghijklmnopqrstuvwxyz';
//  plan for replayability
var letterBank = letterBankMaster.split('');
var lettersGuessed = [];
var wrongLettersGuessed = [];
var failedAttempts = 0;
//  Change if replayability is desired
var wordToGuess = 'prince';
var wordBlanks = ['-', '-', '-', '-', '-', '-'];

//  Main game body
function guessLetter() {
    console.log('we did it!');

    var userInput = document.getElementById('letter').value.toLowerCase();
    console.log(userInput);

    var guessIndex = wordToGuess.indexOf(userInput);

    var userIndex = (letterBank.indexOf(userInput));
    console.log(letterBank.indexOf(userInput));

    //  Checks if letter is invalid or already guessed
    if(userIndex === (-1)) {
        alert('Guess an unguessed letter!');
        console.log('letterBank ', letterBank);
        return;
    }

    //  Checks if letter is in word to guess
    else if(guessIndex !== (-1)) {
        wordBlanks[guessIndex] = userInput;
        console.log('word blanks ' + wordBlanks);

        lettersGuessed.push(userInput);
        console.log(lettersGuessed);

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        var blanks = document.getElementById('container-blanks');
        blanks.textContent = wordBlanks.join(' ');

        //  Here's where we'll update the hang person
        //  Also filling in the blanks of the word
    }

    //  Wrong letter has been guessed
    else {
        lettersGuessed.push(userInput);
        wrongLettersGuessed.push(userInput);
        console.log(wrongLettersGuessed);

        //  Update guessed letters
        var displayGuessed = document.getElementById('container-guessed');
        displayGuessed.textContent = wrongLettersGuessed.join(' ');

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        failedAttempts++;
        console.log(failedAttempts);
    }
}



console.log(letterBankMaster);
console.log(letterBank);
console.log(lettersGuessed);
console.log(failedAttempts);
console.log(wordToGuess);




