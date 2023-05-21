// Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // Found the actual lenght of the ul with class of links instead of manually calculating and inputting it
    // links.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
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
    if(scrollHeight > navHeight) {
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

sendMessage.addEventListener("click", function (){
    
    // Check if the message meets the minimum character limit
    if (message.length >= 30) {
      // Code to handle sending the message
      console.log("Sending message:", message);
    } else {
      alert("Message must be at least 30 characters long!");
    }
});