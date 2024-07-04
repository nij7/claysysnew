document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const dateInput = document.getElementById('date');

    const validateInput = (input, condition) => {
        if (condition) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    };

    // name
    nameInput.addEventListener('input', () => {
        const isValid = /^[A-Za-z\s]+$/.test(nameInput.value);
        validateInput(nameInput, isValid);
    });

    // Email
    emailInput.addEventListener('input', () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        validateInput(emailInput, isValid);
    });

    // Date 
    dateInput.addEventListener('input', () => {
        const isValid = dateInput.value !== '';
        validateInput(dateInput, isValid);
    });

    // Submit
    const form = document.querySelector('#booking form');
    form.addEventListener('submit', (event) => {
        if (!nameInput.classList.contains('valid') || !emailInput.classList.contains('valid') || !dateInput.classList.contains('valid')) {
            event.preventDefault();
            alert('Please correct the errors in the form.');
        }
    });
});
