document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Display a warning message
    alert(`⚠️ WARNING: You entered:\nUsername: ${username}\nPassword: ${password}\n\nThis is a simulation. Never share your credentials with untrusted websites.`);

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});