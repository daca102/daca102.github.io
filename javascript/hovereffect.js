// JavaScript
const projectContainers = document.querySelectorAll('.project-image');

projectContainers.forEach((projectContainer) => {
    let isHovering = false;

    projectContainer.addEventListener('mousemove', (e) => {
        if (!isHovering) {
            isHovering = true;
            projectContainer.classList.add('tilted');
        }

        const containerWidth = projectContainer.offsetWidth;
        const containerHeight = projectContainer.offsetHeight;
        const mouseX = e.clientX - projectContainer.getBoundingClientRect().left;
        const mouseY = e.clientY - projectContainer.getBoundingClientRect().top;

        const rotateX = (mouseY / containerHeight - 0.5) * 5; // Adjust the sensitivity by changing the multiplier (e.g., 5)
        const rotateY = (mouseX / containerWidth - 0.5) * 5; // Adjust the sensitivity by changing the multiplier (e.g., 5)

        projectContainer.style.transition = 'none'; // Remove the transition for smooth real-time tilting
        projectContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    projectContainer.addEventListener('mouseleave', () => {
        if (isHovering) {
            isHovering = false;
            projectContainer.style.transition = 'transform 0.2s ease, filter 0.3s ease-in-out'; // Reset over a 0.2s period
            projectContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            
            // Remove the tilt effect after it completes
            setTimeout(() => {
                projectContainer.style.transition = 'none';
                projectContainer.classList.remove('tilted');
            }, 200);
        }
    });

    projectContainer.addEventListener('mouseenter', () => {
        if (!isHovering) {
            isHovering = true;
            projectContainer.classList.add('tilted');
        }
    });
});
