function findLongestWordLength(str) {
    let longestLength = 0;
    let regex = /\w+/g;
    let wordList = str.match(regex);
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > longestLength) {
            longestLength = wordList[i].length;
        }
    }
    return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");