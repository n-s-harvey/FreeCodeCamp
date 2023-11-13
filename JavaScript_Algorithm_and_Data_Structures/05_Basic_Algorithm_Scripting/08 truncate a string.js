function truncateString(str, num) {

    let answer = "";

    if (str.length <= num) return str;

    else {
        answer = str.slice(0, num);
        answer += "...";
        return answer;
    }
    
    
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);