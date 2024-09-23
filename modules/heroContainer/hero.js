// HERO CONTAINER ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll('.heading .letter');

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transition = `opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease`;
            letter.style.opacity = 1;
            letter.style.transform = 'translateX(0) translateY(0)';
            letter.style.filter = 'blur(0)';
        }, index * 70);
    });
});

