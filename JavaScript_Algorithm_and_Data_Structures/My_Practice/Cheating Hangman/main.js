const prompt = require('prompt-sync')({sigint: true});

const PromptSync = require('prompt-sync');
const Hangman = require('./dictionary.js');

/* 
* use this if you hate the person playing :)
const FILEPATH = './words.txt';
 */

const FILEPATH = "./words_alpha.txt";

let game = new Hangman(FILEPATH);

console.table(game.sizeWordPairs);

let isWordSizeSet = false;

do {

    try {

        let wordLengthOptions = [];
        function logMapKeys(value, key, map) {
            // console.log(key);
            wordLengthOptions.push(key);
        }
        game.sizeWordPairs.forEach(logMapKeys);
        console.log("Available word length options: ");
        console.log(...wordLengthOptions);

        let userRequestedSize = prompt("Enter desired word size: ");
        userRequestedSize = Number(userRequestedSize);
        game.wordSize = userRequestedSize;
        isWordSizeSet = true;
    }
    catch (e) {
        console.error(e)
        isWordSizeSet = false;
    }
} while (isWordSizeSet == false);

const letterGuessed = prompt("Input a letter to guess: ");

game.submitGuess(letterGuessed);
console.log(game.playerWord);