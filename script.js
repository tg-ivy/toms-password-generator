// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global Variables
let numOfCharacters;
let isSpecial;
let isLowercase;
let isUppercase;
let isNumeric;

let passwordCriteria = {

};

// Function to prompt user for password options
function getPasswordOptions() {
  numOfCharacters = 0;
  while ((numOfCharacters < 8) || (numOfCharacters > 128)) {
    numOfCharacters = prompt('How many characters do you want in your password? Min 8, Max 128');
  };
  passwordCriteria.num = numOfCharacters;
  isLowercase = confirm('Would you like your password to contain lowercase letters?');
  isUppercase = confirm('Would you like your password to contain uppercase letters');
  isNumeric = confirm('Would you like your password to contain numerics');
  isSpecial = confirm('Would you like your password to contain special characters?');
  passwordCriteria.lowercase = isLowercase;
  passwordCriteria.uppercase = isUppercase;
  passwordCriteria.numeric = isNumeric;
  passwordCriteria.special = isSpecial;
  return passwordCriteria;
};

// Function for getting a random element from an array
function getRandom(arr) {
  randomElement = arr[Math.floor(Math.random()*arr.length)];
  return randomElement
};
let randomPassword = [];
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let potentialChars = [];
  let requiredChars = [];
  if (passwordCriteria.lowercase == true) {
    potentialChars = potentialChars.concat(lowerCasedCharacters);
    requiredChars.push(getRandom(lowerCasedCharacters));
  };
  if (passwordCriteria.uppercase == true) {
    potentialChars = potentialChars.concat(upperCasedCharacters);
    requiredChars.push(getRandom(upperCasedCharacters));
  };
  if (passwordCriteria.numeric == true) {
    potentialChars = potentialChars.concat(numericCharacters);
    requiredChars.push(getRandom(numericCharacters));
  };
  if (passwordCriteria.special == true) {
    potentialChars = potentialChars.concat(specialCharacters);
    requiredChars.push(getRandom(specialCharacters));
  };
  for (i = 0; i < passwordCriteria.num; i++) {
    randomPassword.push(getRandom(potentialChars));
  };
  for (i = 0; i < requiredChars.length; i++) {
    randomPassword.splice(i, 1, getRandom(requiredChars));
  }
  randomPasswordAsString = randomPassword.join("");
  console.log(randomPasswordAsString);
  return randomPasswordAsString
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

