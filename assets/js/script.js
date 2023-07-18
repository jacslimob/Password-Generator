// I used ChatGPT to help generate code. Dennis Itua (tutor) made sure I understood every line of code and even helped me make the code better

// Generate a random password based on the given criteria

function generatePassword() {

  var length = Number(prompt("Enter the desired password length (8-128 characters):"));
// Originally the code accepted a string as an answer. This code fixes that. Added by Dennis Itua
  if (isNaN(length)) {
    alert("Must choose a number!");
    return null;
  }

 

  // Validate the password length

  while (length < 8 || length > 128) {

    alert("Please enter a password length between 8 and 128 characters.");

    length = Number(prompt("Enter the desired password length (8-128 characters):"));
// Same code as above for not letting code accept anything but numbers
    if (isNaN(length)) {
      alert("Must choose a number!");
      return null;
    }
  }

 

  // Ask for password criteria

  var includeLowercase = confirm("Include lowercase characters?");

  var includeUppercase = confirm("Include uppercase characters?");

  var includeNumeric = confirm("Include numeric characters?");

  var includeSpecialChars = confirm("Include special characters?");

 

  // Validate that at least one character type is selected

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {

    alert("At least one character type must be selected.");

    includeLowercase = confirm("Include lowercase characters?");

    includeUppercase = confirm("Include uppercase characters?");

    includeNumeric = confirm("Include numeric characters?");

    includeSpecialChars = confirm("Include special characters?");

  }

 

  // Define characters for each character type

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';

  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var numericChars = [0,1,2,3,4,5,6,7,8,9,10];
// Couldn't figure out how to include ' and " characters
  var specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-= ';
  
 

  var password = '';

 

  // Generate password based on the selected criteria

  while (password.length < length) {

    if (includeLowercase) {

      var randomIndex = Math.floor(Math.random() * lowercaseChars.length);

      password += lowercaseChars[randomIndex];

    }

    if (includeUppercase) {

      var randomIndex = Math.floor(Math.random() * uppercaseChars.length);

      password += uppercaseChars[randomIndex];

    }

    if (includeNumeric) {

      var randomIndex = Math.floor(Math.random() * numericChars.length);

      password += numericChars[randomIndex];

    }

    if (includeSpecialChars) {

      var randomIndex = Math.floor(Math.random() * specialChars.length);

      password += specialChars[randomIndex];

    }

  }

 

  // Trim the password to match the desired length

  password = password.slice(0, length);

 
  var result = shuffle(password.split(""));

  return result.join("");

}

 

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

 

// Write password to the #password input

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password 

}
//Tutor Dennis Itua was able to find this code to shuffle the password so it didn't follow a pattern

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

 

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);