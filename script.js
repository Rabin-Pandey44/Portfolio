// Loading Screen
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Dynamic Track Display
document.addEventListener('DOMContentLoaded', () => {
    const tracks = [
        "Kendrick Lamar - HUMBLE",
        "Jay-Z - Empire State of Mind",
        "Eminem - Lose Yourself",
        "Divine - Kohinoor",
        "Drake - God's Plan",
        "Post Malone - Circles",
        "Kanye West - Stronger",
        "J. Cole - No Role Modelz",
        "Travis Scott - SICKO MODE",
        "Lil Wayne - A Milli",
        "Cardi B - Bodak Yellow",
        "50 Cent - In Da Club",
        "Yama Buddha - Saathi",
        "Mc Flo - Aawaj",
        "Yama Buddha - Ma Futchhhu Tara Jhukdina",
        "Drake - Nonstop",
        "Dr Dre - The Next Episode",
        "Outkast - Ms. Jackson",
        "Lil Nas X - Old Town Road",
        "Kendrick Lamar - DNA",
        "XxxTentacion - SAD!",
        "Dax - Lonely Dirt Road",
        "Ice Cube - It Was A Good Day",
        "Akon - Smack That",
        "Wiz Khalifa - Black and Yellow",
        "Snoop Dogg - Drop It Like It's Hot",
        "2PAC - All Eyez On Me",
        "Snoop Dogg - Gin and Juice"
    ];

    let currentTrack = 0;
    const trackDisplay = document.getElementById('current-track');
    
    function updateTrack() {
        trackDisplay.style.opacity = 0;
        setTimeout(() => {
            currentTrack = (currentTrack + 1) % tracks.length;
            trackDisplay.textContent = tracks[currentTrack];
            trackDisplay.style.opacity = 1;
        }, 500);
    }
    
    // Initial track display
    trackDisplay.textContent = tracks[currentTrack];
    setInterval(updateTrack, 5000);
});


// Dynamic Quotes
document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Started from the bottom now we're here",
        "Hustle harder than your excuses",
        "Code like it's your last commit",
        "Build empires, not just websites",
        "If it was easy, everyone would do it",
        "Start where you are, Use what you have, Do what you can",
        "The only place success comes before work is in the dictionary",
        "The best way to predict the future is to create it",
        "Reminder: I'm not bossy, I just have better ideas",
        "The expert in anything was once a beginner",
        "Don't stop until you're proud",
        "The only limit is your mind",
        "Don't get too serious, enjoy the journey"
    ];
    let currentQuote = 0;
    const quoteDisplay = document.getElementById('current-quote');

    function updateQuote() {
        quoteDisplay.style.opacity = 0;
        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            quoteDisplay.textContent = quotes[currentQuote];
            quoteDisplay.style.opacity = 1;
        }, 500);
    }

    // Initial quote display
    quoteDisplay.textContent = quotes[currentQuote];
    setInterval(updateQuote, 5000);
    }
);

// Form Submission
document.getElementById('main-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Project Launched! Let\'s build something great \u{1F680}');
    e.target.reset();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .blog-post').forEach(element => {
    observer.observe(element);
});

