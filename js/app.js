document.querySelector(".dropdown-trigger").addEventListener("click", function() {
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("show");
});

