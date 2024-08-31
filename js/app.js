// Basic JavaScript setup
console.log('JavaScript is connected!');

// Example: Toggle the visibility of job descriptions (if you want to implement something similar)
document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    jobTitles.forEach(function(job) {
        job.addEventListener('click', function() {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });
});
