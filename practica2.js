function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Formato de email incorrecto. Debe ser xxxx@yyyy.zzzz';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    
    if (password.length < 8 || password.length > 10) {
        passwordError.textContent = 'La contraseña debe tener entre 8 y 10 caracteres.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function habilitarSubmitButton() {
    const submitButton = document.getElementById('submitButton');
    if (validateEmail() && validatePassword()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

document.getElementById('email').addEventListener('focus', function() {
    document.getElementById('emailError').textContent = '';
});

document.getElementById('password').addEventListener('focus', function() {
    document.getElementById('passwordError').textContent = '';
});

document.getElementById('email').addEventListener('blur', function() {
    validateEmail();
    habilitarSubmitButton();
});

document.getElementById('password').addEventListener('blur', function() {
    validatePassword();
    habilitarSubmitButton();
});


