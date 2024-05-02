document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Your login logic here, for demonstration purposes, let's just log the values
    console.log("Username: " + username);
    console.log("Password: " + password);
});
