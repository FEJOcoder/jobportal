
document.getElementById("advanced-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const jobType = document.getElementById("job-type").value;
    const experienceLevel = document.getElementById("experience-level").value;

    // Placeholder for API call or search function
    console.log("Searching jobs in " + location + " for " + jobType + " with " + experienceLevel + " experience.");
});

