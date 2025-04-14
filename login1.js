const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleSignUpButton = document.querySelector('.toggle-signup-btn');
    const toggleSignInButton = document.querySelector('.toggle-signin-btn');
    const container = document.querySelector('.container');

    // Toggle to show Sign Up form
    toggleSignUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active'); // Shows Sign Up form
    });

    // Toggle to show Sign In form
    toggleSignInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active'); // Shows Sign In form
    });
});
