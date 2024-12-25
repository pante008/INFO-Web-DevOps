(function () {
    "use strict";
    function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const isExpanded = menu.classList.toggle('active');
    document.querySelector('.hamburger').setAttribute('aria-expanded', isExpanded);
    }

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelector('.open');
    const closeEl = document.querySelector('.close');

    if (openEl && modalEl && closeEl) {
    openEl.addEventListener('click', () => {
        modalEl.showModal();
    });

    closeEl.addEventListener('click', () => {
        modalEl.close();
    });
    }
    const msgName = document.querySelector('.msg_name');
    msgName.innerText = "";
    const msgPassword = document.querySelector('.msg_password');
    msgPassword.innerText = "";

    let name = "";
    const nameEl = document.querySelector('.register__name');
    nameEl.addEventListener('input', (event) => {
        name = event.target.value.trim();
        if (name === "dog") {
            msgName.innerText = "You are kidding, right?";
        } else {
            msgName.innerText = ""; 
        }
    });

    let password = "";
    const passwordEl = document.querySelector('.register__password');
    passwordEl.addEventListener('input', (event) => {
        password = event.target.value.trim();
        msgPassword.innerText = "";
    });

    const formEl = document.querySelector('.register');
    formEl.addEventListener('submit', (event) => {

        let isFormInvalid = false;

        if (!name) {
            msgName.innerText = "Username is required";
            isFormInvalid = true;
        }
        if (!password) {
            msgPassword.innerText = "Password is required";
            isFormInvalid = true;
        }

        if (isFormInvalid) {
            event.preventDefault(); 
        }
    
    });

    const flashcards = document.querySelectorAll(".flashcard");

    flashcards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
        });
    });
})();