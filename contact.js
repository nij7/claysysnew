document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
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

    // Name 
    nameInput.addEventListener('input', () => {
        const isValid = nameInput.value.length >= 3;
        validateInput(nameInput, isValid);
    });

    // regex pattern
    emailInput.addEventListener('input', () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        validateInput(emailInput, isValid);
    });

    // Message
    messageInput.addEventListener('input', () => {
        const isValid = messageInput.value.trim().length > 0;
        validateInput(messageInput, isValid);
    });

    // submit
    form.addEventListener('submit', (event) => {
        if (!nameInput.classList.contains('valid') || 
            !emailInput.classList.contains('valid') || 
            !messageInput.classList.contains('valid')) {
            event.preventDefault();
            alert('Please correct the errors in the form.');
        }
    });
});
