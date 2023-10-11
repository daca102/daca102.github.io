
    // Add JavaScript to close the accordion when clicked again
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach((toggle) => {
        toggle.addEventListener('change', function () {
            if (this.checked) {
                // Close other accordions
                accordionToggles.forEach((otherToggle) => {
                    if (otherToggle !== this) {
                        otherToggle.checked = false;
                    }
                });
            }
        });
    });

// rotateOnScroll.js

// JavaScript to add scroll-triggered rotation effect using mouse scroll position
const img = document.getElementById('rotateImage');

// Define the initial and final rotation angles
const initialRotation = 0; // Initial rotation angle (0 degrees)
const finalRotation = 2; // Final rotation angle (5 degrees)

// Calculate the range of mouse scroll positions where rotation should occur
const startScrollPosition = 200; // Start rotating immediately as the mouse scrolls
const endScrollPosition = 500; // Adjust this value to control the range of mouse scroll that triggers rotation

// Function to update the rotation angle based on the mouse scroll position
function updateRotation() {
    const scrollPosition = window.scrollY;
    let rotationAngle = mapRange(scrollPosition, startScrollPosition, endScrollPosition, initialRotation, finalRotation);

    // Cap the maximum rotation angle (e.g., 5 degrees)
    const maxRotationAngle = 10; // Adjust this value as needed
    rotationAngle = Math.min(rotationAngle, maxRotationAngle);

    img.style.transform = `perspective(1000px) rotateX(${rotationAngle}deg)`;
}


// Function to map a value from one range to another
function mapRange(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}

// Update the rotation on initial page load
updateRotation();

// Update the rotation when the user scrolls
window.addEventListener('scroll', updateRotation);

    