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
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('whatsapp-send').addEventListener('click', function() {
        // Get the form data
        var firstName = document.querySelector('input[name="first-name"]').value;
        var lastName = document.querySelector('input[name="last-name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var message = document.querySelector('textarea[name="message"]').value;

        // Construct the WhatsApp message
        var fullMessage = "Hello, my name is " + firstName + " " + lastName +
            ".\nEmail: " + email + "\nMessage: " + message;

        // Encode the message for a URL
        var encodedMessage = encodeURIComponent(fullMessage);

        // Define your phone number (Replace it with your actual number)
        var whatsappNumber = "+256705870892"; // Include country code

        // Construct the WhatsApp URL
        var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

        // Open the URL in a new tab
        window.open(whatsappUrl, '_blank');
    });
}); // This is the missing closing bracket.


