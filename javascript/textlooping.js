// script.js
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.text');
    const words = ['Can design things.', 'Able to analyze data for insights', 'Work with cross-functional teams']; // Add your desired text here
    let wordIndex = 0;

    function typeText() {
        const currentWord = words[wordIndex];
        let charIndex = 0;

        function type() {
            if (charIndex <= currentWord.length) {
                textElement.textContent = currentWord.slice(0, charIndex);
                charIndex++;
                if (charIndex <= currentWord.length) {
                    setTimeout(type, 60); // Adjust typing speed
                } else {
                    setTimeout(eraseText, 700); // Delay before erasing text
                }
            }
        }

        type();
    }

    function eraseText() {
        const currentWord = words[wordIndex];
        let charIndex = currentWord.length;

        function erase() {
            if (charIndex >= 0) {
                textElement.textContent = currentWord.slice(0, charIndex);
                charIndex--;
                setTimeout(erase, 70); // Adjust erasing speed
            } else {
                wordIndex = (wordIndex + 1) % words.length; // Cycle through words
                setTimeout(typeText, 700); // Delay before typing next word
            }
        }

        erase();
    }

    typeText(); // Start the animation when the page loads
});