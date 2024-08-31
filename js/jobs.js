
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

