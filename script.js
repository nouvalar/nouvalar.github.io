// EmailJS initialization and contact form handling
(function () {
    emailjs.init("EZ3-cZ5ak49wjbliT"); // Public Key dari EmailJS
})();

document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const form = this;
            const loading = form.querySelector('.loading');
            const errorMessage = form.querySelector('.error-message');
            const sentMessage = form.querySelector('.sent-message');

            loading.style.display = 'block';
            errorMessage.style.display = 'none';
            sentMessage.style.display = 'none';

            // Kirim data ke EmailJS
            emailjs.sendForm('service_x0xvyoe', 'template_yvya028', form)
                .then(function (response) {
                    loading.style.display = 'none';
                    sentMessage.style.display = 'block';
                    form.reset();
                }, function (error) {
                    loading.style.display = 'none';
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = 'Failed to send message. Please try again.';
                });
        });
    }
});
