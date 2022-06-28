function validateEmail(email){
    let emailError = document.getElementById("emailError")
    let emailRegexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/ 
    emailError.innerHTML = '';

    if(email && !emailRegexp.test(email)){
        emailError.innerHTML = "Please enter a valid email address";
        emailError.style.color="red";
        emailError.style.marginTop = "10px";
        return false;
    }
    else{
        return true;
    }
}

function validatePhone(phone){
    let phoneError = document.getElementById("phoneError")
    let phoneRegexp = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
    phoneError.innerHTML = '';

        if(phone && !phoneRegexp.test(phone)){
            phoneError.innerHTML = "Invalid format";
            phoneError.style.color="red";
            phoneError.style.marginTop = "10px";
            return false;
        }
        else{
            return true;
        }
}

function validatePassword(password){
    let passwordError = document.getElementById("passwordError")
    let passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    passwordError.innerHTML = '';

        if(password && !passwordRegexp.test(password)){
            passwordError.innerHTML = "Password must have minimum 8 characters, at least one uppercase, lower case and number";
            passwordError.style.color="red";
            passwordError.style.marginTop = "10px";
            return false;
        }
        else{
            return true;
        }
}

function strengthChecker(password) {
    let password_strength = document.getElementById("password-text");
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
        let regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[0-9A-Za-z]{8}"); //Atleast 8 character.

        let passed = 0;
      for (let i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
          passed++;
        }
      }
      let strength = "";
      switch (passed) {
        case 0:
        case 1:
        case 2:
          strength = "<small class='progress-bar bg-danger' style='width: 30%;height:5px;margin-top:10px;'></small>";
          break;
        case 3:
          strength = "<small class='progress-bar bg-warning' style='width: 60%;height:5px;margin-top:10px;'></small>";
          break;
        case 4:
          strength = "<small class='progress-bar bg-success' style='width: 100%;height:5px;margin-top:10px;'></small>";
          break;
      }
      password_strength.innerHTML = strength;

}

