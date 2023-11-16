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

// <script>
//     document.addEventListener('DOMContentLoaded', () => {
//         const navLinks = document.querySelectorAll('.resume-nav a');
//         navLinks.forEach(link => {
//             link.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 // Remove active class from all links
//                 navLinks.forEach(link => link.classList.remove('active'));
//                 // Add active class to clicked link
//                 this.classList.add('active');
//                 const targetId = this.getAttribute('href');
//                 const targetSection = document.querySelector(targetId);
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             });
//         });
//     });
// </script>

