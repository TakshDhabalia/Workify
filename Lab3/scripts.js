document.getElementById('submitBtn').addEventListener('click', validateForm);

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorMessage = [];

    // Check for empty fields
    if (!username) errorMessage.push("Username cannot be empty.");
    if (!email) errorMessage.push("Email cannot be empty.");
    if (!phone) errorMessage.push("Phone number cannot be empty.");
    if (!password) errorMessage.push("Password cannot be empty.");
    if (!confirmPassword) errorMessage.push("Confirm Password cannot be empty.");

    // Validate phone number
    if (phone && !/^\d{10}$/.test(phone)) errorMessage.push("Phone number must be exactly 10 digits.");

    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$#&])[A-Za-z\d@$#&]{7,}$/;
    if (password && !passwordPattern.test(password)) {
        errorMessage.push("Password must be at least 7 characters, contain one uppercase letter, one number, and one special character (&, $, #, @).");
    }

    // Match password and confirm password
    if (password && confirmPassword && password && confirmPassword !== confirmPassword) {
        errorMessage.push("Passwords do not match.");
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,3}$/;
    if (email && !emailPattern.test(email)) errorMessage.push("Invalid email format.");

    if (errorMessage.length > 0) {
        alert(errorMessage.join("\n"));
    } else {
        document.getElementById('successMessage').innerHTML = "Form Submitted Successfully!";
    }
}



document.getElementById('changeImageBtn').addEventListener('click', function () {
    document.getElementById('image').src = "image2.jpg";
});
