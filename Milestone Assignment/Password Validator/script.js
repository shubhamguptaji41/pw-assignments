// 1. Password Validator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ

const checkPassword = ()=> {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword').value;
   
    if (password ===  confirmPassword) {
        document.getElementById('showMessage').innerHTML = "<span style='color: green;'>Password Matched Successfully</span>";
        console.log("Password Matched. Password validation Successful.")
        return false;
    }
    else {
        document.getElementById('showMessage').innerHTML = "**Password Not Matched";
        console.log("Password didn't match. Password validation unsuccessful.")
        return false;
    }
}