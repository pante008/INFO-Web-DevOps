(function(){

    "use strict";

    document.addEventListener("DOMContentLoaded", function() {

        const modal = document.querySelector("#modal");
        const closeModal = document.querySelector(".close");
        const emailInput = document.querySelector("#email");
        const confirmEmailInput = document.querySelector("#confirm-email");

        document.querySelectorAll(".subscribe-link").forEach(function(subscribeLink) {
            subscribeLink.addEventListener("click", function(event) {
                event.preventDefault();
                modal.style.display = "flex";
                modal.classList.add("show");
            });
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                resetForm(); 
            }
        });

        const hamburger = document.querySelector('.hamburger');
        const dropdownContent = document.querySelector('.dropdown-content');

        hamburger.addEventListener('click', function() {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }

            setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 5000); 
        });

        const registrationForm = document.querySelector("#registration-form");
        const emailError = document.querySelector("#email-error");
        const confirmEmailError = document.querySelector("#confirm-email-error");

        registrationForm.addEventListener("submit", function(event) {
     
            event.preventDefault();

            emailError.textContent = ""; 
            confirmEmailError.textContent = ""; 

            const email = emailInput.value.trim();
            const confirmEmail = confirmEmailInput.value.trim();

            if (!email) {
                emailError.textContent = "This is required"; 
                return;
            }

            if (!email.includes("@")) {
                emailError.textContent = "Please enter a valid email address.";
                return; 
            }

            if (email !== confirmEmail) {
                confirmEmailError.textContent = "The field must match the provided email address."; // Match validation
                return;
            }

            alert("Subscribed! Email confirmed.");
            modal.style.display = "none";
            resetForm(); 
        });

        emailInput.addEventListener("input", function() {
            emailError.textContent = ""; 
        });

        confirmEmailInput.addEventListener("input", function() {
            confirmEmailError.textContent = ""; 
        });

        const cancelButton = document.querySelector("#cancel");
        cancelButton.addEventListener("click", function() {
            modal.style.display = "none";
            resetForm();
        });

    
        function resetForm() {
            emailInput.value = "";
            confirmEmailInput.value = "";
        }

    });
})();
