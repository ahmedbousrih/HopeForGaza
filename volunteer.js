document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('volunteerModal');
    const volunteerBtn = document.querySelector('.volunteer-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Open modal when volunteer button is clicked
    volunteerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Form submission
    const form = document.getElementById('volunteerForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show success message
        alert('Thank you for your application! We will contact you soon.');
        
        // Clear form and close modal
        form.reset();
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
});

// Form submission
async function submitVolunteerForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        // For testing purposes, just show success message
        alert('Thank you for your application! We will contact you soon.');
        modal.style.display = "none";
        event.target.reset();
        
        // Uncomment this when you have a backend set up
        /*
        const response = await fetch('/api/volunteers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Thank you for your application! We will contact you soon.');
            modal.style.display = "none";
            event.target.reset();
        } else {
            throw new Error('Failed to submit form');
        }
        */
    } catch (error) {
        alert('There was an error submitting your application. Please try again later.');
        console.error('Error:', error);
    }
} 