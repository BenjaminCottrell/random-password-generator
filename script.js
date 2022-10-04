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
      Window.close();
    } else {
      alert ("Input is invalid, please input a valid character length");
    } 
  }


alert ("You chose the length of your password to be:\n" + passwordLength + " characters long \nNext, confirm whether you would like your password to contain numbers, lower case, upper case, or special characters. \nYou must select at least one option.");

while (!invalid) {
  var lowerCase = confirm("Would you like your password to contain \nlower case letters?");
  var upperCase = confirm("Would you like your password to contain \nupper case letters?");
  var numerical = confirm("Would you like your password to contain \nnumbers?");
  var special = confirm("Would you like your password to contain \nspecial characters?");

  alert("You chose\n lower case letters: " + lowerCase + "\n upper case letters: " + upperCase + "\n numbers:" + numerical + "\n special characters: " + special);
  if (lowerCase == true || upperCase == true || numerical == true || special == true) {
    invalid = true;
  } else {
    alert ("Invalid entry. \nAt least one character type must be selected.");
  }
}

if (lowerCase == true) {
  lowerCase = 'abcdefghijklmnopqrstuvwxyz';
} else {
  lowerCase = '';
} if (upperCase == true) {
  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
} else {
  upperCase = '';
} if (numerical == true) {
  numerical = '123456789';
} else {
  numerical = '';
} if (special == true) {
  special = ' ~`!@#$%^&*()-+={}[]|/:;<>,.?';
} else {
  special = '';
}

// Merges the strings of chosen options
var grandString = special.concat(lowerCase, upperCase, numerical);

// Creates a final password by randomizing each item in the string
{
var randomNumber = '';
for (var i = 0; i < passwordLength; i++) {
  randomNumber += grandString[Math.floor(Math.random() * grandString.length)];
} 
return randomNumber;
  }
}
