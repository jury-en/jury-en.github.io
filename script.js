window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-level').forEach(skillLevel => {
        const skillBarPosition = skillLevel.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if(skillBarPosition < screenPosition) {
            skillLevel.style.width = skillLevel.getAttribute('data-level');
        }
    });
});

function toggleContent(id) {
    var content = document.getElementById(id);
    var subheading = content.previousElementSibling;

    if (content.style.display === "none") {
        content.style.display = "block";
        subheading.classList.add('active'); // Add 'active' class to rotate the icon
    } else {
        content.style.display = "none";
        subheading.classList.remove('active'); // Remove 'active' class to reset the icon
    }
}

// function toggleContent(id) {
//     var content = document.getElementById(id);
//     if (content.style.display === 'none' || content.style.display === '') {
//         content.style.display = 'flex';
//     } else {
//         content.style.display = 'none';
//     }
// }

