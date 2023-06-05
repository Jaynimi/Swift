// Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links");
const messageInput = document.getElementById('message-input').value;
const submitButton = document.getElementById('error-message');
const errorMessage = document.getElementById('error-message');
const form = document.querySelector('form');

navToggle.addEventListener("click", function () {
    // Found the actual lenght of the ul with class of links instead of manually calculating and inputting it
    // links.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight + 50}px`
    } else {
        linksContainer.style.height = 0;
    }

    console.log()

});

// Fixed Navbar on scroll and Back-to-top button
const navbar = document.getElementById("nav");
const backToTop = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    // fixed navbar
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    // back-to-top button
    if (scrollHeight > 450) {
        backToTop.classList.add("show-link");
    } else {
        backToTop.classList.remove("show-link")
    }
});

form.addEventListener('submit', function (event) {
    if (!messageInput.validity.valid) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        alert("Thank you. We'll get back to you soon")
    }
});