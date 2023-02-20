//step-1: add event click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    
//step-2: Get the Email address inside the email input field
//always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

//step-3: Get Password
//3.a: set id on the html elemnt
//3.b: get the element
//3.c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

//DANGER: DO NOT VERIFY email password on the client side
//step-4: verify email and password and check whether valid user or not
if(email === 'sontan@bap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    console.log('invalid user');
}
})