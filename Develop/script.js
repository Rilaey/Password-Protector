// Assignment code here

function generatePassword() {
  let input = window.prompt("How long would you like your password to be? Select between 8 - 128 characters.")
  let passwordLength = parseInt(input)

  if (isNaN(passwordLength)) { // will only allow a number to be entered, without a warning message.
    window.prompt("Please enter a number");
    return;
  }

  if (passwordLength < 8) { // password to short
    window.alert("Password is to short. Please enter a password between 8 - 128 characters.");
    return;
  } else if (passwordLength > 128) { // password to long 
    window.alert("Password is to long. Please enter a password between 8 - 128 characters.");
    return;
  }

  let numbers = window.confirm("Would you like to use numbers in your password?") // number yes/no
  let lowerCase = window.confirm("Would you like to use lower case letters in your password?")// lower case yes/no
  let upperCase = window.confirm("Would you like to use upper case letters in your password?")// upper case yes/no
  let specialSymbols = window.confirm("Would you like to use special characters in your password?")// symbol yes/no

  if (numbers === false, lowerCase === false, upperCase === false, specialSymbols === false) { 
    window.prompt("You must select atleast one of catagorys!");
    return;
  }

  let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let lowerCaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let upperCaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let specialSymbolsList = ['!', '@', '#', '$', '%', '*', '(', ')', '+', ',', '<', '>', '=', '[', ']', '?']

  let userChoices = []
  //console.log(userChoices)

  if (numbers === true) {
    userChoices.push(numberList);
  }

  if (lowerCase === true) {
    userChoices.push(lowerCaseList);
  }

  if (upperCase === true) {
    userChoices.push(upperCaseList);
  }

  if (specialSymbols === true) {
    userChoices.push(specialSymbolsList);
  }

  let randomPassword = ''

  function randomInt(min, max) {
    return Math.floor(math.random()*(max - min) + min) // floor will remove the decimals
  }

  for (let x = 0; x < passwordLength; x++) {
    let randomCharacter = userChoices[randomInt(0, userChoices.length - 1)] // 0 will be the min and userChoices - 1 will be the max 
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
