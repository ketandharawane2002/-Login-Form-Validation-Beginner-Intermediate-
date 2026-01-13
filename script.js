document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMsg = document.getElementById('successMsg');

function clearErrors(){
    emailError.textContent = '';
    passwordError.textContent = '';
    successMsg.textContent = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const emailVal = email.value.trim();
    const passwordVal = password.value;
    let valid = true;

    if (!emailVal) {
    emailError.textContent = 'Email is required.';
    valid = false;
    } else if (!emailVal.includes('@')) {
    emailError.textContent = 'Email must contain an @ character.';
    valid = false;
    }

    if (!passwordVal) {
    passwordError.textContent = 'Password is required.';
    valid = false;
    } else if (passwordVal.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
    }

    if (valid) {
    successMsg.textContent = 'Login successful.';
    form.reset();
    }
});
});
