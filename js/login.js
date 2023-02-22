// step-1 add event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
//   step-2  get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
//   step-3 get password
//step-3.1 set id on the html element
//3.2 get the element
//3.3 set the value of element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log( email, password); 

// step-4 varify email and password

if(email === 'kawsar@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    alert('tui password vule gesis keno toke ar amar dorkar nai')
}
})