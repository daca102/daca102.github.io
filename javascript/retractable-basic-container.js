document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function(button) {
        button.addEventListener('change', function () {
            const container = button.closest('.basic-container');
            const hiddenContent = container.querySelector('.hidden-content');
            const jobTitle = container.querySelector('h3');

            if (button.checked) {
                hiddenContent.style.display = 'block';
            } else {
                hiddenContent.style.display = 'none';
                jobTitle.style.display = 'block';
            }
        });

        // Hide details by default
        const container = button.closest('.basic-container');
        const hiddenContent = container.querySelector('.hidden-content');
        hiddenContent.classList.add('hidden-details');
    });
});
