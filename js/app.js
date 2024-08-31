
document.addEventListener("DOMContentLoaded", () => {
    // Dropdown menu toggle
    const dropdown = document.querySelector(".dropdown");
    const dropdownTrigger = dropdown.querySelector(".dropdown-trigger");
    dropdownTrigger.addEventListener("click", () => {
        dropdown.classList.toggle("show");
    });

    // Form handling example
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Message sent!");
    });
});

