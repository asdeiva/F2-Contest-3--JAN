    let fname = document.getElementById("fname").value;
    let email = document.getElementById('email').value;
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('cpassword').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


function validateSignup(){
    let flag = false;
    flag = nameVal();
    flag = passVal();

    function nameVal(){
        let lenArr = fname.split(" ");
        if(lenArr.length>=2){
            flag=true;
        }
        else {
            alert("Name should at least be 2 letter word");
            flag=false;
        }
        return flag;
    }
    function passVal(){
        var p = document.getElementById('pass1').value,errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        flag = false;
    }
    flag = true;
        return flag;
    }
return flag;
}