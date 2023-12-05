/* 
Validation of registration Information
Name:
    use function validateName 
        (make sure its letters not numbers)
        make sure users have a first and last name



    once password and username is created and encrypted puch to server.js
Email:
     validateEmail
      // Check if the email is unique
Address:
    use function isNonNegInt
Get the values previously inputted and place them back into the input boxxes
Get the error messages and display them accordingly
*/
let params= (new URL (document.location)).searchParams;

window.onload = function(){
    let register_form = document.forms['register_form'];

    //get the values from the login URL and place in register form. Sticky part
    register_form.elements['name'].value = params.get('name'); 
    register_form.elements['email'].value = params.get('email'); 

    //get error messages. 

}
/*---------------------------Password Validation---------------------------------
use function validatePassword
validateConfirmPassword
encrypt
*/

function validatePassword() {
//Get entered values for password
//let password = document.forms ['registration_form']['password'].value;

//validate password requirments and complexity,
let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
 let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
 let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 12) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}}
  
/*----client side validation making sure passwords match, this optional, consider deleting. 

  // Get the values from the password and repeat password fields
  let password = document.getElementById('psw').value;
  let repeatPassword = document.getElementById('confirm_psw').value;

  // Check if the password and repeat password match
  if (password !== repeatPassword) {
    alert('Password and Repeat Password do not match.');
    return;
  }

  // If the passwords match, you can proceed with form submission or other actions
  document.getElementById('register-form').submit();
}*/

