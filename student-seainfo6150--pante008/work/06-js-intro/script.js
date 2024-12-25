"use strict"; 

(function () {
    const menuButton = document.getElementById("menu-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
    menuButton.addEventListener("click", function () {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !isExpanded);        
        if (isExpanded) {
            dropdownMenu.classList.remove("open");
            dropdownMenu.classList.add("hidden");
        } else {
            dropdownMenu.classList.remove("hidden");
            dropdownMenu.classList.add("open");
        }
    });

    menuButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            menuButton.click();
        }
    });
})();

