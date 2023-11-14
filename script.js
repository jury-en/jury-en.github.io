window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-level').forEach(skillLevel => {
        const skillBarPosition = skillLevel.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if(skillBarPosition < screenPosition) {
            skillLevel.style.width = skillLevel.getAttribute('data-level');
        }
    });
});
