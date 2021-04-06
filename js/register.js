var formValues = {name, email, password, rpassword};
var errorValues = ["Full name field"," Email field"," Password field"," Repeat password field"];
// Full name field
var fullName = document.getElementById('name');
var error1 = document.getElementById('error1');
function fullNameOnBlur(e){
   if(nameValidation(e.target.value)){
       formValues.name = e.target.value;
       errorValues[0] = "";
   }else{
        error1.style.display = 'block';
        formValues.name = undefined;
        errorValues[0] = "Full name field";
   }
}
fullName.addEventListener('blur', fullNameOnBlur);
function fullNameOnFocus(){
    error1.style.display = 'none';
}
fullName.addEventListener('focus', fullNameOnFocus);
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
// Repeat password field
var rPassword = document.getElementById('rpassword');
var error4 = document.getElementById('error4');
function rPasswordOnBlur(e){
    var newPassword = e.target.value;
    if(newPassword === formValues.password){
        errorValues[3] = "";
    }else{
        error4.style.display = 'block';
        errorValues[3] = " Repeat password field";
    }
}
rPassword.addEventListener('blur', rPasswordOnBlur);
function rPasswordOnFocus(){
    error4.style.display = 'none';
}
rPassword.addEventListener('focus', rPasswordOnFocus);


// Suscribe Button
var button = document.getElementById('suscribe-buton');
function suscribeOnClick(e){
    e.preventDefault;
    if(dataValidation(formValues)){
        alert(formValues.name + " " + formValues.email);
    }else{
        alert("There's an error in: " + errorValues[0] + errorValues[1] + errorValues[2] + errorValues[3]);
    }
}
button.addEventListener('click', suscribeOnClick);
//Bonus
var newTitle = document.querySelector('h4');
function fullNameOnFocus2(){
    newTitle.style.display = 'block';
}
function fullNameOnKeydown(e){
    newTitle.innerText = 'Hola '+ e.target.value;
}
fullName.addEventListener('focus', fullNameOnFocus2);
fullName.addEventListener('keydown', fullNameOnKeydown);
