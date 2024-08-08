// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'contact.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('responseMessage').textContent = 'Thank you for your message! We will get back to you soon.';
            document.getElementById('contactForm').reset(); // Clear form fields
        } else {
            document.getElementById('responseMessage').textContent = 'Sorry, something went wrong. Please try again.';
        }
    };
    xhr.send(formData);
});
