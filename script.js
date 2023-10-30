const loginButton = document.getElementById('login-button');
const userIdField = document.getElementById('user-id');
const passwordField = document.getElementById('password');

loginButton.addEventListener('click', () => {
    const userId = userIdField.value;
    const password = passwordField.value;

    if (userId === 'kk2@gmail.com' && password === '123456') {
        // Admin login
        window.location.href = "admin.html";
    } else if (userId === 'ridhiranjan007@gmail.com' && password === '123456') {
        // User login
        window.location.href = "user.html";
    } else {
        // Handle login errors
        alert('Login failed. Please check your credentials.');
    }
});




