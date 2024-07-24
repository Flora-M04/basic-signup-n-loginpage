document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');

    // Initially show only the login form and hide signup form
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';

    // Function to show login form and hide signup form
    function showLoginForm() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    // Function to show signup form and hide login form
    function showSignupForm() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    var root = document.getElementById('root');
    var btn= document.getElementById('Loginbtn');

    btn.addEventListener('click',function(){
        
    });
   
   
   
   
   
   
    // Event listener for login link
    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (optional)
        showLoginForm();
    });

    // Event listener for signup link
    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (optional)
        showSignupForm();
    });

   

});
