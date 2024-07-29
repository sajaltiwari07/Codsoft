// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the user input from the form fields
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        // Validate the form fields (basic validation)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate sending the message (you can replace this with actual backend code)
        setTimeout(function() {
            alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            // Clear the form after submission
            contactForm.reset();
        }, 500); // Simulating a delay for demonstration purposes
    });
});
