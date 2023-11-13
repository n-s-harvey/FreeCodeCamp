function repeatStringNumTimes(str, num) {
    let answer = "";

    if (num < 0) return answer;

    else {
        for (let i = 0; i < num; i++) {
            answer += str;
        }
        return answer;
    }
    
}

repeatStringNumTimes("abc", 3);