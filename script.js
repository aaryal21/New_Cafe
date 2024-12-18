document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Thank you for signing up! We’ll notify you soon.');
        document.getElementById('email-form').reset();
    }
});
