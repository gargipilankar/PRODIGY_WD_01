// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the header element by its ID
    const header = document.getElementById("header");
    // Get all the navbar link elements
    const navbarLinks = document.querySelectorAll(".navbar a");

    // Add an event listener for the scroll event
    window.addEventListener("scroll", () => {
        // If the page is scrolled more than 50 pixels, add the 'scrolled' class to the header
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            // Otherwise, remove the 'scrolled' class from the header
            header.classList.remove("scrolled");
        }
    });

    // Iterate over each navbar link
    navbarLinks.forEach(link => {
        // Add an event listener for the mouseover event
        link.addEventListener("mouseover", () => {
            // Change the link color to the hover color when the mouse is over the link
            link.style.color = "var(--hover-color)";
        });

        // Add an event listener for the mouseout event
        link.addEventListener("mouseout", () => {
            // Change the link color back to the default text color when the mouse leaves the link
            link.style.color = "var(--text-color)";
        });
    });
});