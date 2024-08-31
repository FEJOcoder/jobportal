const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for job listings
app.get('/api/jobs', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "Remote",
            description: "Looking for a skilled frontend developer with experience in React."
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Web Solutions",
            location: "New York, NY",
            description: "Experienced backend developer needed for a high-traffic website."
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "San Francisco, CA",
            description: "We need a creative designer to join our team and help with user interface design."
        }
    ]);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log());
