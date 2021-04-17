var formValues = {email:undefined, password:undefined};
var errorValues = ["Email field", "Password field"];

// Email field
var eMail = document.getElementById('email');
var error2 = document.getElementById('error2');
if (eMail) {
    function emailOnBlur(e){
        if(emailValidation(e.target.value)){
            formValues.email = e.target.value;
            errorValues[0] = "";
        }else{
            error2.style.display = 'block';
            formValues.email = undefined;
            errorValues[0] = " -Email field";
        }
    }
    eMail.addEventListener('blur', emailOnBlur);
    function emailOnFocus(){
        error2.style.display = 'none';
    }
    eMail.addEventListener('focus', emailOnFocus)
}
// Password field
var password = document.getElementById('password');
var error3 = document.getElementById('error3');
if(password){
    function passwordOnBlur(e){
        if(passwordValidation(e.target.value)){
            formValues.password = e.target.value;
            errorValues[1] = "";
        }else{
            error3.style.display = 'block';
            formValues.password = undefined;
            errorValues[1] = " -Password field";
        }
    }
    password.addEventListener('blur', passwordOnBlur);
    function passwordOnFocus(){
        error3.style.display = 'none';
    }
    password.addEventListener('focus', passwordOnFocus);
}
//Validate Button
var newTitle = document.getElementById('displayinfo');
var validator = document.getElementById('validate');
var inputs = document.querySelectorAll('input');
var form = document.querySelector('form');
var label = document.querySelectorAll('label');
var inputError = document.getElementById('input-error');
var formError = document.getElementById('form-error');
var labelError = document.getElementById('label-error');
var buttonError = document.getElementById('input-error');
var passValidate = document.getElementById('validate-register-passed');
async function GetUsers(){
    fetch('https://jsonplaceholder.typicode.com/users?email=formValues.email')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch()
}
function LogInOnClick(e){
    e.preventDefault;
    if(!form){
        formError.style.display = 'inline';
    }else if(!(label.length>=2)){
        labelError.style.display = 'inline';
    }else if(!validator.innerHTML=="Log In"){
        buttonError.style.display = 'inline';
    }else if(inputs.length<4){
        inputError.style.display = 'inline';
    }else{
        passValidate.style.display = 'block';
    }
    if(dataLoginValidation(formValues)){
        newTitle.innerText = "Email:" + formValues.email;
    }else{
        alert("There's an error in: " + errorValues[0] + errorValues[1]);
    };
    GetUsers();
}
validator.addEventListener('click', LogInOnClick);
