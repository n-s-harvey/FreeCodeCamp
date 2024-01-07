const inputField = document.querySelector("#text-input");
inputField.addEventListener("input", () => { document.querySelector("#result").innerText = "" });
inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") palindrome();
});
function palindrome() {
  const str = document.querySelector("#text-input").value;
  const output = document.querySelector("#result");
  if (isEmpty(str)) alert("Please input a value");
  // debugger;
  const letterRegex = /[a-z0-9]/gi;
  // const nonLetterRegex = /[^\w .]/gi;
  const lettersFromString = str.match(letterRegex);

  // const textFromInput = str.replace(nonLetterRegex, "");
  const textFromInput = str;

  const lowercaseLetters =
    lettersFromString.map(letter => letter.toLowerCase());

  const stringLength = lowercaseLetters.length;

  let isPalindrome = true;

  for (let i = 0; i < stringLength; i++) {
    const letter = lowercaseLetters[i];

    let inverseIndex = (stringLength - 1) - i;

    if (letter != lowercaseLetters[inverseIndex]) {
      isPalindrome = false;
      break;
    }
  }

  // debugger;
  output.innerHTML = `<span class="input">${textFromInput}</span><br /> is ${(isPalindrome) ? "" : "not"} a palindrome.`;
}

function isEmpty(str) {
  if (str.length == 0) return true;
  else return false;
}
