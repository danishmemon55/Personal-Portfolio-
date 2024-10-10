// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Loop through each header and add a click event listener
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the active class on the clicked header
        header.classList.toggle('active');

        // Get the next sibling element (accordion content)
        const content = header.nextElementSibling;

        // Check if content is currently displayed
        if (content.style.display === 'block') {
            // If it's displayed, hide it
            content.style.display = 'none';
        } else {
            // If it's hidden, display it
            content.style.display = 'block';
        }
    });
});
