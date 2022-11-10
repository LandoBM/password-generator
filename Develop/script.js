// Assignment Code
var generateBtn = document.querySelector("#generate");

// Selecting random number in the different arrays to randomize the password
function rndNumber(minimun, maximum) {
  if (!maximum){
    maximum = minimun;
    minimun = 0
  }
   var random = Math.random()
   return Math.floor(minimun *(1 - random) + random * maximum)
  
}

function randItem(list){
  return list[rndNumber(list.length)]
}

function generatePassword() {
  // Prompt to password criteria
  var cxInput = window.prompt("How long would you like your password?")

  var passwordLength = parseInt(cxInput)
  
// Prompt to password criteria
  if (isNaN(passwordLength)) {
    window.alert("Try Again! This is not a number.")
  } else {
    window.alert("Thank you! You have entered a number.")
  }
// Password criteria < 8 > 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Paswword length must be between 8 and 128 characters!")
    return
  }
// Prompt Questions
  var cxWantsLowercase = window.confirm("Should your password include lowercase letters?")
  var cxWantsUppercase = window.confirm("Should your password include uppercase letters?")
  var cxWantsNumeric = window.confirm("Should your password include numeric values?")
  var cxWantsSpecialCharacters = window.confirm("Should your password include special characters?")
// Password Criteria arrays
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numericList = ["1","2","3","4","5","6","7","8","9"]
  var scList = ["@","!","#","$","%","&"]
 // Customer selection on which items they would like in their password lowercase,uppercase, numbers, or SC. 
  var cxSelection = []
  
  var generatePassword = ""
// Push whichever the cx (customer) would like if selected = true
  if (cxWantsLowercase === true) {
    cxSelection.push(lowercaseList)
  }

  if (cxWantsUppercase === true){
    cxSelection.push(uppercaseList)
  }

  if (cxWantsNumeric === true) {
    cxSelection.push(numericList)
  }

  if (cxWantsSpecialCharacters === true) {
    cxSelection.push(scList)
  }
// If nothing selected to push then automatically push numbers and lowercase in password
  if (cxSelection.length === 0) {
    cxSelection.push(numericList, lowercaseList)
  }
// For loop 
  for (var i=0; i < passwordLength; i++) {
    var rndIndex = randItem(cxSelection)
    var rndCharacter = randItem(rndIndex)
    generatePassword += rndCharacter
  }
// Return to write password onto the page
  return generatePassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
