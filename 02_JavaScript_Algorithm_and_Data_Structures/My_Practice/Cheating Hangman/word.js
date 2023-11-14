class Word {
    string;
    count;
    occurenceIndexes = [];

    constructor(word, letter) {
        this.string = word;

        for (let i = 0, len = word.length; i < len; i++) {
            if (word[i] == letter) {
                count += 1;
                this.occurenceIndexes.push(i);
            }

        }

    }
}

// module.exports = { Word };