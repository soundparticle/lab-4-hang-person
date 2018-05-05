
//  Setup stuff for API communication
var request = new XMLHttpRequest();
request.open('GET', 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=9&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', true);

//  Send a request for a random word
request.send();

var wordToGuess = '';
var regExp = /[^a-z]+/gi;

//  Do this when the JSON loads
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(request.response);

    wordToGuess = data.word.toLowerCase().replace(regExp, '');
    console.log(data);
    console.log(data.word);
};


var letterBankMaster = 'abcdefghijklmnopqrstuvwxyz';
var letterBank = letterBankMaster.split('');
var lettersGuessed = [];
var wrongLettersGuessed = [];
var failedAttempts = 0;
var correctGuesses = 0;

var guessLimit = 6;

var wordBlanks = [];

setTimeout(() => {
    //  Create array with '-' for each letter of word to guess
    for(var i = 0; i < wordToGuess.length; i++) {
        wordBlanks.push('-');
        document.getElementById('container-blanks').textContent = wordBlanks.join(' ');
    }
    console.log(wordBlanks);
}, 1000);

//  Draw blanks
//background: linear-gradient(red, white);

//  Main game body
//eslint-disable-next-line
function guessLetter() {
    console.log('we did it!');

    //  Grab some elements
    var blanks = document.getElementById('container-blanks');
    var guessed = document.getElementById('container-guessed');
    var letters = document.getElementById('letter');
    var userInput = letters.value.toLowerCase();

    //  Grab some indecies
    var guessIndex = wordToGuess.indexOf(userInput);
    var userIndex = letterBank.indexOf(userInput);
    console.log(letterBank.indexOf(userInput));
    console.log(userInput);

    //  Clear the contents of the text input box
    letters.value = '';

    //  Checks if letter is invalid or already guessed
    if(userIndex === (-1)) {
        setTimeout(() => {
            alert('Please guess a valid letter.');
        }, 100);
        return;
    }

    //  Checks if letter is in word to guess
    else if(guessIndex !== (-1)) {
        for(var i = 0; i < wordToGuess.length; i++) {
            if(wordToGuess[i] === userInput) {
                wordBlanks[i] = userInput;
                correctGuesses++;
                console.log('here ', wordBlanks);
            }
        }

        //  Add to the bank of letters guessed
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        blanks.textContent = wordBlanks.join(' ');
        console.log('wordBlanks ', wordBlanks.join(''));

        if(correctGuesses === wordToGuess.length) {
            console.log('winner winner chicken dinner!');
            blanks.setAttribute('style', 'animation: win-glow 50ms alternate infinite; background: linear-gradient(green, white');
            guessed.setAttribute('style', 'background: linear-gradient(white, green);');
            getJiggy();
        }
    }

    //  Wrong letter has been guessed
    else {
        lettersGuessed.push(userInput);
        wrongLettersGuessed.push(userInput);
        console.log(wrongLettersGuessed);

        //  Update guessed letters
        guessed.textContent = wrongLettersGuessed.join(' ');

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        failedAttempts++;
        console.log(failedAttempts);

        //  Update how many guesses are left
        document.getElementById('submit-button').value = guessLimit - failedAttempts + ' left';

        //  Display body part
        var bodyPart = 'body-' + failedAttempts;
        console.log(bodyPart);
        document.getElementById(bodyPart).style.visibility = 'visible';

        //  Check if they've guessed too many times
        if(failedAttempts === guessLimit) {

            //  Animate the text and display the correct answer
            blanks.setAttribute('style', 'animation: wrong-glow 50ms alternate infinite; background: linear-gradient(red, white);');
            guessed.setAttribute('style', 'background: linear-gradient(white, red);');
            blanks.textContent = wordToGuess.split('').join(' ');
            getJiggy();
            return;
        }
    }
}


function getJiggy() {
    //  Gettin jiggy wit it!

    //  Show rest of body parts if not already visible
    for(var j = 2; j <= 7; j++) {
        document.getElementById('body-' + j).setAttribute('style', 'animation: jiggle 50ms alternate infinite; visibility: visible;');
    }
    document.getElementById('container-gallow').setAttribute('style', 'animation: rainbow 2s forwards infinite;');
    //  Hide the first head if not already hidden
    document.getElementById('body-1').setAttribute('style', 'visibiltiy: hidden');

    //  Disable the textbox and sumbit button to force a page refresh if they want to play again
    document.getElementById('submit-button').disabled = true;
    document.getElementById('letter').disabled = true;

    document.body.style.background = 'white';

    // MAKE IT RAIN!!!!
    rain();
}

//  PURPLE RAIN, PURPLE RAAIINN!!!
function rain() {
    var dropCount = 100;
    var temp = document.createDocumentFragment();
    for(var r = 0; r < dropCount; r++) {
        console.log('making rain');

        var randomX = Math.round(Math.random(100) * 98);
        var randomY = Math.round(Math.random(100) * 50);
        var randomD = Math.round(Math.random(10) * 60) * 10;
        console.log(randomX, ' ', randomY);

        var rain = document.createElement('span');
        rain.id = 'rain';
        rain.style = 'left: ' + randomX + '%; width: 3px; top: -1000px;';
        rain.style.setProperty('animation-delay', randomY + '00ms');
        rain.style.setProperty('animation-duration', randomD + 'ms');
        console.log(rain);
        temp.appendChild(rain);
    }
    setTimeout(() => {
        document.body.appendChild(temp);
    }, 100);
}