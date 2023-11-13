const fs = require('fs');

/* class Word {
    string;
    occurenceIndexes = [];

    constructor(word, letter) {
        this.string = word;

        for (let i = 0, len = word.length; i < len; i++) {
            if (word[i] == letter) {
                this.occurenceIndexes.push(i);
            }
        }
    }
} */

class WordSet {
    #letter;
    #words = [];
    #indexes = [];

    constructor(arrayOfIndexes, words, letter) {
        this.#letter = letter;
        this.#words = words;
        this.#indexes = arrayOfIndexes;



    }

    get size() {
        return this.words.length;
    }

    get indexes() {
        return this.#indexes;
    }

}

class Word {
    #string;
    #indexes = [];
    #letter;

    constructor(word, letter) {
        this.#string = word;
        
        for (let i = 0, len = word.length; i < len; i++) {
            if (letter == word[i]) {
                this.#indexes.push(i);
            }
        }
        
    }

}

class Hangman {
    /**
     * @description Filepath pointing to the dictionary to be loaded.
     * @type {string}
     */
    #dictionaryFilepath;
    #wordArray = [];
    #countOfWordsBySize = new Map();
    #mapOfWordsToSize = new Map();
    #gameWordSize;
    #playerWord = [];
    #lettersGuessed = [];
    #availableWords = [];
    #arrayOfWordObjects = [];
    
    constructor(filepath) {
        this.#dictionaryFilepath = filepath;
        /* (() => {
            const startTime = Date.now();
            const wordString = fs.readFileSync(this.#dictionaryFilepath, 'utf-8');
            const regex = /\S+/g;
    
            this.#wordArray = wordString.match(regex);

            const endTime = Date.now();
    
            console.log(`That took ${(endTime - startTime) / 1000} seconds.`);
            
        })(); */

        (function readFile(hangmanObject) {
            const startTime = Date.now();
            const wordString = fs.readFileSync(hangmanObject.#dictionaryFilepath, 'utf-8');
            const regex = /\S+/g;

            hangmanObject.#wordArray = wordString.match(regex);

            const endTime = Date.now();

            console.log(`That took ${(endTime - startTime) / 1000} seconds.`);
        })(this);

        // * Used for analysis of the counts of different word sizes
        (function createMapOfWordSizes(hangmanObject) {
            const startTime = Date.now();

            for (let i = 0, len = hangmanObject.#wordArray.length; i < len; i++) {

                let wordSize = hangmanObject.#wordArray[i].length;

                if (hangmanObject.#countOfWordsBySize.has(wordSize)) {
                    let value = hangmanObject.#countOfWordsBySize.get(wordSize);
                    value++;
                    hangmanObject.#countOfWordsBySize.set(wordSize, value);
                }

                else {
                    hangmanObject.#countOfWordsBySize.set(wordSize, 1);
                }

            }

            const endTime = Date.now();
            console.log(`That took ${(endTime - startTime) / 1000} seconds to load the map.`);
        })(this);

        (function mapWordsBySize(hangmanObject) {
            const startTime = Date.now();
            let array = hangmanObject.#wordArray;
            let map = hangmanObject.#mapOfWordsToSize;

            for (let i = 0, len = array.length; i < len; i++) {
                let word = array[i];
                let wordLength = word.length;

                if (map.has(wordLength)) {
                    map.get(wordLength).push(word);
                }

                else {
                    map.set(wordLength, [word]);
                }

            }

            const endTime = Date.now();
            console.log(`That took ${(endTime - startTime) / 1000} seconds to create the length/array map.`);
        })(this);

        /* (() => {
            const startTime = Date.now();
            
            for (let i = 0, len = this.#wordArray.length; i < len; i++) {
    
                let wordSize = this.#wordArray[i].length;
    
                if (this._mapWordSizes.has(wordSize)) {
                    let value = this._mapWordSizes.get(wordSize);
                    value++;
                    this._mapWordSizes.set(wordSize, value);
                }
    
                else {
                    this._mapWordSizes.set(wordSize, 1);
                }
    
            }
    
            const endTime = Date.now();
            console.log(`That took ${(endTime - startTime) / 1000} seconds to load the map.`);
        })();
      */
    }

    /**
     * @description Sets the word size and creates the array of available words.
     */
    set wordSize(size) {

        if (this.#mapOfWordsToSize.has(size)) {
            this.#gameWordSize = size;
            console.log("Successfully set word size.");

            this.#availableWords = this.#mapOfWordsToSize.get(size);

            for (let i = 0; i < size; i++) {
                this.#playerWord.push("_");
            }

            return true;
        }

        else {
            // console.error("This is not a valid size: ", size);
            throw new Error("This is not a valid size");
        }

    }

    get list() {
        return this.#wordArray;
    }

    get mapWordSizes() {
        return this.#countOfWordsBySize;
    }

    get sizeWordPairs() {
        return this.#mapOfWordsToSize;
    }

    get playerWord() {
        return this.#playerWord;
    }

    /**
     * Takes a letter guess, compares to the array of words available, and determines if the guess is successful or not.
     * @param {string} letter 
     * @returns {boolean} isSuccessful
     */
    submitGuess(letter) {

        /**
         * @description This is a temporary variable that will ultimately be saved into availableWords.
         */
        let regex = new RegExp(letter, "i");
        /**
         * @description This maps an array of strings (value) to an array of letter locations (keys)
         * @type {Map<number, Array>}
         */
        let letterOccurences = new Map();

        for (let i = 0, len = this.#availableWords.length; i < len; i++) {
            let word = this.#availableWords[i];
            if (regex.test(word)) {

                this.#arrayOfWordObjects.push(new Word(word, letter));
                
                for (let j = 0, wordLength = word.length; j < wordLength; j++) {

                    if (word[j] == letter) {
                        this.#updateLetterOccuranceMap(
                            letterOccurences, j, word
                        );
                    }

                }

            }
        }

        for (let i = 0; i < this.#arrayOfWordObjects.length; i++) {
            /**
             * @type {Word}
             */
            const element = this.#arrayOfWordObjects[i];
            for (let j = 0; j < this.#arrayOfWordObjects.length; j++) {
                const inner = this.#arrayOfWordObjects[j];
                if (element != inner) {
                    if (element.indexes )
                }
                
            }
        }

        let largestIterator = 0;
        let largestWordSet = 0;

        function findLargestSet(value, key, map) {
            let size = map.get(key).length;
            if (size > largestWordSet) {
                largestWordSet = size;
                largestIterator = key;
            }
        }

        letterOccurences.forEach(findLargestSet);
        console.log(`The largest set was at key ${largestIterator} with size ${largestWordSet}`);

        // console.log(arrayWordObjects);
        console.table(letterOccurences);

        this.#availableWords = letterOccurences.get(largestIterator);
        this.#playerWord[largestIterator] = letter;

        console.log(this.#playerWord);

    }

    #checkWordIndexEquality(wordObject1, wordObject2) {
        if (wordObject1.occurenceIndexes[i - 1] == wordObject2.occurenceIndexes[i]) {
            return true;
        }
        else return false;
    }

    /**
     * @description Updates the letterOccurences map
     * @param {Map<Array, Array>} map
     * @param {Array} key
     * @param {string} value 
     */
    #updateLetterOccuranceMap(map, key, value) {

        if (map.has(key)) {
            map.get(key).push(value);
        }

        else {
            map.set(key, [value]);
        }

    }

}



module.exports = Hangman;