const inputField = document.querySelector("#text-input");
inputField.addEventListener("input", () => { document.querySelector("#result").innerText = "" });
inputField.addEventListener("keydown", (event) => {
  if (event.key == "Enter") palindrome();
});

function palindrome() {
  const userInput = document.querySelector("#text-input").value;
  const output = document.querySelector("#result");
  if (isEmpty(userInput)) alert("Please input a value");
  // debugger;
  const lowercaseLetters = toLowerCase(userInput);

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
  output.innerHTML = `<span class="input">${userInput}</span><br /> is ${(isPalindrome) ? "" : "not"} a palindrome.`;

  function toLowerCase(userInput) {
    const letterRegex = /[a-z0-9]/gi;
    const lettersFromString = userInput.match(letterRegex);

    const lowercaseLetters = lettersFromString.map(letter => letter.toLowerCase());
    return lowercaseLetters;
  }

  function isEmpty(str) {
    if (str.length == 0) return true;
    else return false;
  }
}

