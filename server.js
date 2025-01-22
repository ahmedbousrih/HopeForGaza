const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string');

// Create volunteer schema
const volunteerSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    age: Number,
    availability: Number,
    interests: [String],
    experience: String,
    motivation: String,
    dateSubmitted: { type: Date, default: Date.now }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

// Handle form submission
app.post('/api/volunteers', async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();
        res.status(200).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting application' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000')); 