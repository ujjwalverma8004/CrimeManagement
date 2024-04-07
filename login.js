const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.getElementById("signInForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Display the alert
    alert("Signed in successfully!");

    // Redirect to the main HTML file
    window.location.href = "index.html";
});

document.getElementById("signInForm2").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the entered email and password
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Check the entered email and password against the predefined values
    var correctEmail = "ujjwal@gmail.com";
    var correctPassword = "ujjwal";

    if (email === correctEmail && password === correctPassword) {
        // Display the alert
        alert("Signed in successfully!");

        // Redirect to the main HTML file
        window.location.href = "index.html";
    } else {
        // Display an error message if the credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
});