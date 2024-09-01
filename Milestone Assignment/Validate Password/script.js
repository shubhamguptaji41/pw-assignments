const email = document.getElementById('email')
const password = document.getElementById('password')
const checkBtn = document.getElementById('checkBtn')
const showMessage = document.getElementById('showMessage')

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value


    if (emailValue && passwordValue) {
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            showMessage.innerHTML = `<div style='color: red;'>please include '@' in the email address' ${emailValue}' is missing '@'</div>`;
            return;
        }
        if (passwordValue.length <= 8) {
            showMessage.innerHTML = "<div style='color: red;'>Password must be at least 8 characters</div>";
            return;
        }
        
        showMessage.innerHTML = "<div style='color: green;'>Valid email and password! Account created successfully</div>";
        
    } else {
        showMessage.innerHTML = "<div style='color: red;'>Please fill out this filed</div>";
        
    }

})

