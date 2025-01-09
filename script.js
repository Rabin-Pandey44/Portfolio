document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initSmoothScrolling();
    initReadMoreButtons();
    initFormSubmission();
    initMobileNavToggle();
    initScrollToTopButton();
    initScrollAnimations();
});

// Preloader functionality
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 1000);
            }, 2000);
        }
    });
}

// Smooth scrolling for nav links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// "Read More" buttons functionality
function initReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const moreText = this.previousElementSibling;
            if (moreText) {
                const isHidden = moreText.style.display === 'none';
                moreText.style.display = isHidden ? 'block' : 'none';
                this.textContent = isHidden ? 'Read Less' : 'Read More';
            }
        });
    });
}

// Form submission handler
function initFormSubmission() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent from ${email} with the following message: ${message}`);
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
}

// Mobile navigation toggle
function initMobileNavToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
}

// Scroll to top button
function initScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Animate elements on scroll
function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    window.addEventListener('scroll', () => {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    });
}
