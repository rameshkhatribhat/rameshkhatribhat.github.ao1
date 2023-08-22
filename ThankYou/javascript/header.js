// JavaScript to toggle the mobile navigation
document.getElementById("mobile-nav-toggle").addEventListener("click", function() {
    var navUl = document.querySelector("nav ul");
    navUl.classList.toggle("active");
});



//Check me

    // Get the button element by its id
    var button = document.getElementById("showAlert");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Show an alert when the button is clicked
        alert("Thank you! Would you like to know more about myself? You may love me.");
    });


//back-to-top
// Show the "Back to Top" button when user scrolls down
window.onscroll = function() {
    showBackToTopButton();
};

function showBackToTopButton() {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

// Smooth scroll to the top when the button is clicked
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop();
});

function scrollToTop() {
    const scrollToTop = window.setInterval(function() {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // How far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16); // Run every 16ms (approximately 60fps)
}
