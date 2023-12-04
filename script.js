// Define a function to toggle the theme
function toggleTheme() {
    // Get the body element
    let body = document.body;
    // Check if the body has the dark-theme class
    if (body.classList.contains("dark-theme")) {
        // Remove the dark-theme class
        body.classList.remove("dark-theme");
    } else {
        // Add the dark-theme class
        body.classList.add("dark-theme");
    }
}

// Define a function to create the parallax effect
function parallaxEffect() {
    // Get the parallax container element
    let parallax = document.querySelector(".parallax-container");
    // Get the scroll position of the window
    let scroll = window.pageYOffset;
    // Change the transform property of the parallax container based on the scroll position
    parallax.style.transform = "translateY(" + scroll * 0.5 + "px)";
}

// Add an event listener to the window to call the parallax effect function when the window is scrolled
window.addEventListener("scroll", parallaxEffect);
