var formValues = {email, password};
var errorValues = ["Full name field"," Email field"," Password field"," Repeat password field"];

// Email field
var eMail = document.getElementById('email');
var error2 = document.getElementById('error2');
function emailOnBlur(e){
    if(emailValidation(e.target.value)){
        formValues.email = e.target.value;
        errorValues[1] = "";
    }else{
        error2.style.display = 'block';
        formValues.email = undefined;
        errorValues[1] = " Email field";
    }
}
eMail.addEventListener('blur', emailOnBlur);
function emailOnFocus(){
    error2.style.display = 'none';
}
eMail.addEventListener('focus', emailOnFocus);
// Password field
var password = document.getElementById('password');
var error3 = document.getElementById('error3');
function passwordOnBlur(e){
    if(passwordValidation(e.target.value)){
        formValues.password = e.target.value;
        errorValues[2] = "";
    }else{
        error3.style.display = 'block';
        formValues.password = undefined;
        errorValues[2] = " Password field";
    }
}
password.addEventListener('blur', passwordOnBlur);
function passwordOnFocus(){
    error3.style.display = 'none';
}
password.addEventListener('focus', passwordOnFocus);

// Suscribe Button
var button = document.getElementById('suscribe-buton');
function suscribeOnClick(e){
    e.preventDefault;
    if(dataLoginValidation(formValues)){
        alert(formValues.name + " " + formValues.email);
    }else{
        alert("There's an error in: " + errorValues[0] + errorValues[1] + errorValues[2] + errorValues[3]);
    }
}
button.addEventListener('click', suscribeOnClick);

//Validate Button
var validator = document.getElementById('validate')
var inputs = document.querySelector('input');
var form = document.querySelector('form');
var label = document.querySelector('label');
var button = document.querySelector('button')
var inputError = document.getElementById('input-error');
var formError = document.getElementById('form-error');
var labelError = document.getElementById('label-error');
var buttonError = document.getElementById('input-error');
var passValidate = document.getElementById('validate-register-passed');
function ValidateOnClick(e){
    e.preventDefault;
    if(!form){
        formError.style.display = 'inline';
    }else if(!label){
        labelError.style.display = 'inline';
    }else if(!button){
        buttonError.style.display = 'inline';
    }else if(!inputs){
        inputError.style.display = 'inline';
    }else{
        passValidate.style.display = 'block';
    }
}
validator.addEventListener('click', ValidateOnClick);