// Random Password Generator

function generate() {
     
   
//set password values
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var num = "1234567890";
    var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var character = "";
// set prompt/confirms 
    var charCount = window.prompt("How many characters would you like your password to be? (8-128)");
    var passLength = parseInt(charCount);
    var letterLittle = window.confirm("Click OK if you would like lowercase letters?")
    var letterBig = window.confirm("Click OK if you would like uppercase letters?");
    var nums = window.confirm("Click OK if you would like numbers in your password?");
    var specialDigits = window.confirm("Click OK if you would like to use special characters in your password?");
// allChoices to help concatenate the values with the spefications of the prompts/confirms
    var allChoices = ""

        
        if (passLength >= 8 && passLength <= 128 === false) {
        window.alert("Please choose between 8-128 characters.");
        }
            
        
// if they choose UPPERCASE letters this will run
        if (letterBig === true) {
            allChoices += upperCase;
        } 
 
 // if they choose LOWERCASE letters this will run       
        if (letterLittle === true) {
            allChoices += lowerCase;
        } 
        
// if they choose NUMBERS this will run        
        if (nums === true) {
            allChoices += num;
        }

// if they choose SPECIAL CHARACTERS this will run     
        if (specialDigits === true) {
            allChoices += specialChar;
        }

// for loop to run all of the parameters how every many times the user chooses via "passLength"
          for ( i = 0; i < passLength; i++) {
           
            var password = Math.floor(allChoices.length * Math.random());
            character += allChoices.charAt(password);
        }
// Returning generated password to span element on HTML
        document.getElementById("generatedPassword").textContent = character
        console.log(character);
    
        
 
}

