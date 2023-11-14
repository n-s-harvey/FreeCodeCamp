function reverseString(str) {
  let newStr = "";
  for (let i = str.length; i > 0; i--) {
    newStr += str[i - 1];
  }
  return newStr;
}

reverseString("hello");