// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// New code starts below

function generatePassword() {
  alert ("Respond to the ensuing questions to generate a random password");

  // Call for user input to determine password length and confirm afterward
  var invalid = true;
  while (invalid) {
    var passwordLength = Number(prompt("Enter the number of characters you would like your password to contain \n It must be higher than 8 characters \n It must also be less than 128 characters."));
    if (passwordLength > 7 && passwordLength < 129) {
      invalid = false;
    } else if (passwordLength == 0) {
      Window.close;
    } else {
      alert ("Input is invalid, please input a valid character length");
    } 
  }
}

alert ("You chose the length of your password to be" + passwordLength + " characters long \n Next, confirm whether you would like your password to contain numbers, lower case, upper case, or special characters. \n You must select at least one option");
