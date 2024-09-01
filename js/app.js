
<<<<<<< HEAD
document.getElementById("advanced-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const jobType = document.getElementById("job-type").value;
    const experienceLevel = document.getElementById("experience-level").value;

    // Placeholder for API call or search function
    console.log("Searching jobs in " + location + " for " + jobType + " with " + experienceLevel + " experience.");
=======
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
>>>>>>> 8bef1a39b1e8098a529addd5ea5be89cabdb3bde
});

