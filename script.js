// Preloader functionality
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2000);
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get all the "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Add an event listener to each "Read More" button
readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link
        const moreText = this.previousElementSibling; // Get the adjacent 'more-text' paragraph
        const isHidden = moreText.style.display === 'none';

        if (isHidden) {
            // Show the hidden content
            moreText.style.display = 'block';
            this.textContent = 'Read Less'; // Change button text to 'Read Less'
        } else {
            // Hide the content again
            moreText.style.display = 'none';
            this.textContent = 'Read More'; // Change button text back to 'Read More'
        }
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    alert(`Thank you, ${name}! Your message has been sent from ${email} with the following message: ${message}`);
});

// Mobile navigation toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('open');
});

// Scroll to top button
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate elements on scroll
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
window.addEventListener('scroll', function() {
    elementsToAnimate.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
});
