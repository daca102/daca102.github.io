// JavaScript to set the "All" button as active on page load
document.addEventListener('DOMContentLoaded', function () {
    const allButton = document.querySelector('.filter-button[data-tag="all"]');
    allButton.classList.add('active');
    allButton.setAttribute('data-active', 'true');
});



function filterProjects(tag) {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const itemTags = item.getAttribute('data-tags').split(', '); // Split tags into an array using commas and spaces
        if (itemTags.includes(tag) || tag === 'all') {
            item.style.display = 'block'; // Show matching items
            item.style.animation = 'fadeInUp 0.5s ease forwards'; // Apply the animation
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });

    // After filtering, adjust footer position
    adjustFooterPosition();
}

// Add click event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTag = button.getAttribute('data-tag');
        filterProjects(selectedTag);
    });
});



// JavaScript function to toggle the "active" class and data-active attribute
function toggleActive(button) {
    var buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
        btn.removeAttribute('data-active'); // Remove the data-active attribute from all buttons
    });

    button.classList.add('active');
    button.setAttribute('data-active', 'true'); // Set the data-active attribute on the clicked button
}

// Add click event listeners to the filter buttons
var buttons = document.querySelectorAll('.filter-button');
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        toggleActive(this);
    });
});



function adjustFooterPosition() {
    const footer = document.querySelector('.my-footer');
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    // Calculate the remaining space between the bottom of the page and the viewport
    const remainingSpace = windowHeight - bodyHeight;

    // Check if the remaining space is negative (footer is partially hidden)
    if (remainingSpace < 0) {
        // Adjust the margin-top to make the footer fully visible
        footer.style.marginTop = -remainingSpace + 'px';
    } else {
        // Reset the margin-top to keep the footer at the bottom
        footer.style.marginTop = '0';
    }
}

// Call the function when the page loads and when the window is resized
window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);
