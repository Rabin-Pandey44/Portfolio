document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // Dynamic Read More Content
    const readMoreData = {
        ai: "Artificial Intelligence (AI) is transforming industries, enhancing productivity, and changing the way we live. From smart assistants to self-driving cars, AI continues to innovate.",
        tech: "The rapid advancement of technology has both positive and negative impacts on our planet. Embracing sustainable practices is crucial for a better future.",
    };

    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", () => {
            const contentKey = button.getAttribute("data-content");
            const parentArticle = button.parentElement;

            if (contentKey in readMoreData) {
                const additionalContent = document.createElement("p");
                additionalContent.textContent = readMoreData[contentKey];
                additionalContent.classList.add("additional-content");
                parentArticle.appendChild(additionalContent);
                button.remove();
            }
        });
    });

    // Form Submission Alert
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            form.reset();
        } else {
            alert("Please fill in all the fields.");
        }
    });
});
