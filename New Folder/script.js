document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password cannot be empty.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Add your authentication logic here

        // For example, just displaying a success message (in reality, you'd check credentials against a database)
        alert('Login successful!');
    }
});

