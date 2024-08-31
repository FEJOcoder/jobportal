
function displayJobs(jobs) {
    jobContainer.innerHTML = '';
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-posting';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button class='view-details'>View Details</button>
        `;
        jobContainer.appendChild(jobElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const jobSearchInput = document.getElementById("job-search");
    const cityFilter = document.getElementById("city-filter");
    const jobTypeFilter = document.getElementById("job-type-filter");
    const jobContainer = document.getElementById("job-listings");

    fetch("/api/jobs")
        .then(response => response.json())
        .then(jobs => {
            displayJobs(jobs);

            document.getElementById("search-form").addEventListener("submit", (e) => {
                e.preventDefault();
                const searchQuery = jobSearchInput.value.toLowerCase();
                const selectedCity = cityFilter.value.toLowerCase();
                const selectedJobType = jobTypeFilter.value.toLowerCase();

                const filteredJobs = jobs.filter(job => {
                    const matchesSearch = job.title.toLowerCase().includes(searchQuery);
                    const matchesCity = selectedCity ? job.location.toLowerCase().includes(selectedCity) : true;
                    const matchesJobType = selectedJobType ? job.type.toLowerCase().includes(selectedJobType) : true;
                    return matchesSearch && matchesCity && matchesJobType;
                });

                displayJobs(filteredJobs);
            });
        });

    function displayJobs(jobs) {
        jobContainer.innerHTML = "";
        jobs.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.className = "job-posting";
            jobElement.innerHTML = \`
                <h3>\${job.title}</h3>
                <p><strong>Company:</strong> \${job.company}</p>
                <p><strong>Location:</strong> \${job.location}</p>
                <p><strong>Type:</strong> \${job.type}</p>
                <p>\${job.description}</p>
            \`;
            jobContainer.appendChild(jobElement);
        });
    }
});

