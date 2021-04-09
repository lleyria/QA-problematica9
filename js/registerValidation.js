function nameValidation (fullname) {
    return fullname.length >=6 && fullname.indexOf(' ') !== -1;
}
function emailValidation(mail){
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(mail)
}
function passwordValidation(pass){
    return pass.length >=8 && /^[a-z0-9A-Z]/.test(pass);
}
function dataValidation(data) {
return data.name && data.email && data.password && data.rpassword;
}
