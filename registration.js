document.addEventListener('DOMContentLoaded', () => {
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const state = document.getElementById('state');
    const city = document.getElementById('city');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordHelp = document.getElementById('passwordHelp');
    const registrationForm = document.getElementById('registrationForm');

    const validateInput = (input, condition) => {
        if (condition) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    };

    // DOB validation
    dob.addEventListener('change', () => {
        const birthDate = new Date(dob.value);
        const today = new Date();
        let ageValue = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            ageValue--;
        }
        age.value = ageValue;

        validateInput(dob, ageValue >= 18);

        if (ageValue < 18) {
            dob.setCustomValidity('You must be at least 18 years old.');
        } else {
            dob.setCustomValidity('');
        }
    });

    // Validate name
    const validateName = (name) => /^[A-Za-z]+$/.test(name);

    firstName.addEventListener('input', () => {
        const isValid = validateName(firstName.value);
        validateInput(firstName, isValid);

        if (!isValid) {
            firstName.setCustomValidity('First name should contain only letters.');
        } else {
            firstName.setCustomValidity('');
        }
    });

    lastName.addEventListener('input', () => {
        const isValid = validateName(lastName.value);
        validateInput(lastName, isValid);

        if (!isValid) {
            lastName.setCustomValidity('Last name should contain only letters.');
        } else {
            lastName.setCustomValidity('');
        }
    });

    // Phone
    phone.addEventListener('input', () => {
        const isValid = /^\d+$/.test(phone.value);
        validateInput(phone, isValid);

        if (!isValid) {
            phone.setCustomValidity('Phone number should contain only digits.');
        } else {
            phone.setCustomValidity('');
        }
    });

    // state
    const cityOptions = {
        kerala: ['Pathanamthitta','Kottayam','Kochi','Alapuzha', 'Trivandrum'],
        tamilnadu: ['Madras','Chennai', 'Coimbatore'],
        karnataka: ['Bangalore','Whitefield', 'Mysore']
    };

    state.addEventListener('change', () => {
        city.innerHTML = '<option value="">Select City</option>';
        if (state.value) {
            cityOptions[state.value].forEach(cityName => {
                const option = document.createElement('option');
                option.value = cityName.toLowerCase();
                option.textContent = cityName;
                city.appendChild(option);
            });
        }
        validateInput(state, state.value !== '');
    });

    // Password
    password.addEventListener('input', () => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;
        const isValid = strongPasswordRegex.test(password.value);
        validateInput(password, isValid);

        if (!isValid) {
            passwordHelp.textContent = 'Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.';
            password.setCustomValidity('Weak password.');
        } else {
            passwordHelp.textContent = '';
            password.setCustomValidity('');
        }
    });

    // Confirm password 
    confirmPassword.addEventListener('input', () => {
        const isValid = password.value === confirmPassword.value;
        validateInput(confirmPassword, isValid);

        if (!isValid) {
            confirmPassword.setCustomValidity('Passwords do not match.');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    // Form submit 
    registrationForm.addEventListener('submit', (event) => {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert('Passwords do not match.');
        }
        if (age.value < 18) {
            event.preventDefault();
            alert('You must be at least 18 years old to register.');
        }
    });
});
