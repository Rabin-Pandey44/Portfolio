// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name === '' || email === '' || message === '') {
            responseMessage.textContent = 'All fields are required.';
            responseMessage.style.color = 'red';
            return;
        }

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            responseMessage.textContent = result;
            responseMessage.style.color = result.includes('Error') ? 'red' : 'green';
            form.reset(); // Reset form after successful submission
        })
        .catch(error => {
            responseMessage.textContent = 'Error submitting form.';
            responseMessage.style.color = 'red';
            console.error('Error:', error);
        });
    });
});
