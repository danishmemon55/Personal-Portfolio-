const form = document.getElementById('contactForm');
const alertBox = document.getElementById('successAlert');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data using EmailJS
    emailjs.send("service_yy93huj", "template_s6ne75p", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        // Show success alert
        alertBox.classList.add('show');
        
        // Hide alert after 3 seconds
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000);

        // Reset the form
        form.reset();
    }, function(error) {
        console.error('Failed to send message', error);
        alert('Failed to send message. Please try again later.'); // Fixed the line break
    });
});
