// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // a password is generated that matches the selected criteria
  passwordText.value = password;

}

function generatePassword() {
   // length of the password 
    // a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please, enter your password length from 8 to 128 characters");
  var passLen = parseInt(passwordLength);
    while (passLen === null || !passLen || !Number.isInteger(passLen) || passLen < 8 || passLen > 128) {
      console.log(Number.isInteger(passwordLength));
      passwordLength = prompt("Please, enter your password length from 8 to 128 characters");
      passLen = parseInt(passwordLength);
    }
  // character types
    // whether or not to include lowercase, uppercase, numeric, and/or special characters
    // input should be validated and at least one character type should be selected

    // var lowerCase = false;
    // var upperCase = false;
    // var numeric = false;
    // var specialChar = false; 
    var lower_chars = "abcdefghiklmnopqrstuvwxyz";
    var upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers_chars = "0123456789";
    var special_chars = "!@#$%^&*()?";
    var finalChars = "";

    while (finalChars === "") {
      var charTypes = prompt("Please, enter your character type to include in comma separated. ex: lowercase, uppercase, numeric, specialcharacters");
      while (charTypes === null || !charTypes) {
        charTypes = prompt("Please, enter your character type to include in comma separated. ex: lowercase, uppercase, numeric, specialcharacters");
      }
      var char = charTypes.replace(/\s+/g, '')
      char = char.split(',');
      for (let i = 0; i < char.length; i++) {
        console.log(char[i]);
        let temp = char[i].toLowerCase();
        if (char[i] === "lowercase") {
          lowerCase = true;
          finalChars += lower_chars;
        } else if (char[i] === "uppercase") {
          upperCase = true;
          finalChars += upper_chars;
        } else if (char[i] == "numeric") {
          numeric = true;
          finalChars += numbers_chars;
        } else if (char[i] == "specialcharacters") {
          specialChar = true;
          finalChars += special_chars;
        } else {
          alert(temp + " is not a valid character type and it will be ignored");
        }
      }

      if (finalChars === "") {
        alert("Password requirements require atleast one character type.")
      }
    }
    var retVal = "";
    for (var i = 0, n = passLen; i < passLen; ++i) {
        retVal += finalChars.charAt(Math.floor(Math.random() * finalChars.length));
    }
    return retVal;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
