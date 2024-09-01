
document.addEventListener("DOMContentLoaded", () => {
    fetch("jobs.json")
        .then(response => response.json())
        .then(data => {
            const jobListings = document.querySelector(".job-listings");
            data.forEach(job => {
                const jobCard = document.createElement("div");
                jobCard.classList.add("job-card");
                jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>Location: ${job.location}</p>
                    <p>Company: ${job.company}</p>
                    <button>Apply Now</button>
                `;
                jobListings.appendChild(jobCard);
            });
        })
        .catch(error => console.error("Error fetching jobs:", error));
});

