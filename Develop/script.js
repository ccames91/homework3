// Assignment code here
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var lowercase = [];
var uppercase = [];
var numeric = [];
var special = [];
function passwordOptions(){

}
function generatePassword(){
  var answer = prompt('how many charathers?')
  console.log(answer)
  if( answer <8){
alert('length is to short')
  } 
  if(answer >128){
    alert('length is to big now')
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  var answer = prompt('At least one uppercase character')
  console.log(answer)
  if(answer <1){
    alert('need at least 1 character')
  }
  var answer = prompt('at least one lowercase character')
  console.log(answer)
  if(answer <1){
    alert('needs at least one character')
  }
  var answer = prompt('at least one special character')
  console.log(answer)
  if(answer <1){
    alert('need at least one special charcter')
  }
  
return 'Password!'
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  console.log('hello world')
   var password = generatePassword();
  
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
