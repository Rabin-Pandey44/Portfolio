// JavaScript for contact form validation or interactivity
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Basic validation example
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        if (!name || !email) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});
