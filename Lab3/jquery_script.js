$(document).ready(function () {

    $('#changeImageBtn').click(function () {
        $(this).text('Image Changed!');
    });


    $('body').css('background-image', 'url("image1.jpg")');


    $('#submitBtn').click(function () {
        const username = $('#username').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confirmPassword);
    });


    $('#submitBtn').attr('data-action', 'submitForm');
});
