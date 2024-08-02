// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address');
    } else {
        alert('Form submitted successfully');
        // You can add your form submission logic here
        this.reset(); // Reset the form after submission
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
