# Great an interactive Hang Person game

Create a word guessing game that:

1. Randomly selects a word from a list of words
1. The user is shown line blanks for each letter of the word
1. Allows the users to enter one letter "guess" at a time.
    1. If the guess is correct, show all occurances of that letter in the word
    1. If the guess is incorrect, add a body part to the gallows
1. Show a list of all letters the user has guessed
1. If the user guesses all of the letters in the word, let them know they have "won"
1. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"

## Details

### Structure

Your page needs to include the following parts:

1. Gallows - displays the parts of the body as the user guesses incorrectly
2. Word to Guess - Blank lines for each letter in the word. Shows the letters when correctly guessed.
    * Because we haven't got to dynamic element creation, you will need as many letters as your longest word.
    * You can give an id like `letter-0`, `letter-1`, `letter-2`, etc. in order to address by index, i.e. 
    `document.getElementById('letter-' + i)`
3. Guess Letter - An input and button for guessing a letter
4. Letters Guessed - A list of letters guessed so far (correct and incorrect)
5. Number of Guesses - Shows how many total guesses have been made
6. Message - A place to show messages (like win or lose)

You have the freedom to modify the design as long as all the functionality is accounted for.

### Parts

#### Words

Create a file `words.js` that exposes a variable called words that is an array of possible words. 
Don't forget to include a script tag with `src` for this file _before_ the `app.js` file!

### App

Create a file `app.js` that exposes a variable called words that is an array of possible words. 
Don't forget to include a script tag with `src` for this file.

1. Create a `loadWord` function that
    1. Gets a random integer between 0 (inclusive) and length of word (exclusive)
    1. Selects the word from the array with that index and stores for use by the guess function (word 
    will need to be scoped in way guess function can read.
    1. Set the visibility on the letters of the "Word to Guess" to hidden and fully hide 
    (no line blank) any unused letter spaces. (You might not hide them initially so you can "see" that
    word is loading correctly.
1. Create a `guess` function that
    1. Is called by the click of the Guess Letter button
    1. Reads the letter from the Guess Letter input
    1. If '', alerts or messages user that letter is required
    1. Checks against letters already guessed and alerts or messages user that letter has already
    been guessed
    1. Otherwise:
        1. Letter is added to guessed letters
        1. Guess count is incremented
        1. Guess Letter input is set to ''
        1. If word includes the letter (hint: string has an `includes` method):
            1. Letter(s) are revealed in Word to Guess
            1. Check for win condition (every letter of word is in guessed letters)
        1. If word does not include the letter:
            1. Add a body part to the gallows
            1. Check for lose condition (guesses count is max number of body parts)
        1. If win or lose condition:
            1. message the user that they won or ~~died~~ lost
            1. Disable the Guess Letter button (button.disabled = true)
1. Call 'loadWord()` to start things
            
## Stretch Goal

1. Add a play game button that calls load word.
1. Keep track of wins and loses
1. Allow user to play again
1. Don't allow the play game button to be pressed if game is in progress


1. 
