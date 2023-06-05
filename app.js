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

// Set the date(year) automatically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

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

// Message input and send in footer
const sendMessage = document.querySelector(".send-message");
var message = document.getElementById("message-input");

sendMessage.addEventListener("click", function () {

    // Check if the message meets the minimum character limit
    if (message.length >= 30) {
        // Code to handle sending the message
        console.log("Sending message:", message);
    } else {
        alert("Message must be at least 30 characters long!");
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



// Image Transition with Spin, Zoom, and Fade Effects for Events Page
var imageContainer = document.querySelector('#imageContainer');
var images = imageContainer.querySelectorAll('img');

var fadeIn = function (element) {
    element.style.opacity = '1';
};

var fadeOut = function (element) {
    element.style.opacity = '0';
};

var spinAndZoom = function (element) {
    element.style.transform = 'scale(0.5) rotate(0deg)'; // Initial small size

    setTimeout(function () {
        var rotation = 0;
        var interval = setInterval(function () {
            element.style.transform = 'scale(1) rotate(' + rotation + 'deg)'; // Spin effect

            rotation += 180; // Rotate 90 degrees at a time

            if (rotation >= 360) {
                clearInterval(interval);
                setTimeout(function () {
                    element.style.transform = 'scale(1)'; // Reset spin
                }, 1000); // Duration to rotate all 4 sides (in milliseconds)
            }
        }, 250); // Duration to complete each 180-degree rotation (in milliseconds)

        setTimeout(function () {
            element.style.transform = 'scale(1.3)'; // Zoom in effect

            setTimeout(function () {
                element.style.transform = 'scale(0.5)'; // Zoom out effect

                setTimeout(function () {
                    element.style.transform = 'scale(1)'; // Reset zoom
                    fadeOut(element);
                }, 1000); // Duration of zoom out effect (in milliseconds)
            }, 2000); // Duration of zoom in effect (in milliseconds)
        }, 2000); // Duration to stay the same size (in milliseconds)
    }, 1000); // Duration of initial spin effect (in milliseconds)
};

// Initial fade-out for all images except the first one
for (var i = 1; i < images.length; i++) {
    fadeOut(images[i]);
}

// Start the image transition loop
var currentIndex = 0;
var nextIndex = 1;



// Start the image transition loop
var currentIndex = 0;
var nextIndex = 1;

var transitionImages = function () {
    fadeOut(images[currentIndex]);

    setTimeout(function () {
        images[currentIndex].style.transform = 'scale(0.2)'; // Reset scale for previous image
        fadeIn(images[nextIndex]);
        spinAndZoom(images[nextIndex]);

        currentIndex = nextIndex;
        nextIndex = (nextIndex + 1) % images.length;

        setTimeout(transitionImages, 6000); // Duration before transitioning to the next image (in milliseconds)
    }, 1000); // Duration of fade-out effect (in milliseconds)
};

// Start the image transition loop
setTimeout(transitionImages, 2000);
