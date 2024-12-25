(function () {
    'use strict';

    const form = document.querySelector('#registration-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const confirmationEmailInput = document.querySelector('#confirmation-email');

    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const confirmationEmailError = document.querySelector('#confirmation-email-error');

    function showError(element, message) {
        element.innerText = message;
        element.classList.add('visible-error');
    }

    function hideError(element) {
        element.innerText = '';
        element.classList.remove('visible-error');
    }

    function validateName() {
        const nameValue = nameInput.value.trim();

        if (nameValue === '') {
            showError(nameError, 'Name input is required');
            return false;
        } else if (!isNaN(nameValue)) {
            showError(nameError, 'Cannot be a number');
            return false;
        } else {
            hideError(nameError);
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            showError(emailError, 'Email input is required');
            return false;
        } else {
            hideError(emailError);
            return true;
        }
    }

    function validateConfirmationEmail() {
        const emailValue = emailInput.value.trim();
        const confirmEmailValue = confirmationEmailInput.value.trim();

        if (confirmEmailValue === '') {
            showError(confirmationEmailError, 'Please confirm the above email');
            return false;
        } else if (confirmEmailValue !== emailValue) {
            showError(confirmationEmailError, 'Confirmation email does not match email');
            return false;
        } else {
            hideError(confirmationEmailError);
            return true;
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    confirmationEmailInput.addEventListener('input', validateConfirmationEmail);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isConfirmEmailValid = validateConfirmationEmail();

        if (isNameValid && isEmailValid && isConfirmEmailValid) {
            form.submit();
        }
    });
})();
