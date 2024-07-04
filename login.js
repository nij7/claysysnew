document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');

    const validateInput = (input, isValid) => {
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    };

    // Username 
    usernameInput.addEventListener('input', () => {
        const isValid = usernameInput.value.length >= 5;
        validateInput(usernameInput, isValid);
    });

    // Password 
    passwordInput.addEventListener('input', () => {
        const isValid = passwordInput.value.length >= 8;
        validateInput(passwordInput, isValid);
    });

    // submot
    form.addEventListener('submit', (event) => {
        const isUsernameValid = usernameInput.value.length >= 5;
        const isPasswordValid = passwordInput.value.length >= 8;

        validateInput(usernameInput, isUsernameValid);
        validateInput(passwordInput, isPasswordValid);

        if (!isUsernameValid || !isPasswordValid) {
            event.preventDefault();
            alert('Please correct the errors in the form.');
        }
    });
});
