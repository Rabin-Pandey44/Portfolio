document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact JS loaded");

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        alert("Thank you for your message! We will get back to you soon.");
    });
});
