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

// Form Handling: Validate and handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Form submitted successfully!');
                contactForm.reset(); // Clear the form
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Dynamic Content Loading: Load job listings from a JSON file
document.addEventListener('DOMContentLoaded', function() {
    const jobsList = document.querySelector('#job-listings ul');

    if (jobsList) {
        fetch('js/jobs.json')
            .then(response => response.json())
            .then(jobs => {
                jobs.forEach(job => {
                    const jobItem = document.createElement('li');
                    jobItem.innerHTML = `<a href="job-details.html?id=${job.id}">${job.title}</a> - ${job.company}, ${job.location}`;
                    jobsList.appendChild(jobItem);
                });
            })
            .catch(error => console.error('Error loading job listings:', error));
    }
});

// User Interaction Enhancements: Dropdown menus
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');

        trigger.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    });
});

// Modal for Job Applications
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-button');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal-close');

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.add('is-active');
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-active');
        }
    });
});

// Modal for Job Applications
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-button');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal-close');

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.add('is-active');
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-active');
        }
    });
});
