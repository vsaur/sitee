function validateLogin() {
    // Get the login details
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    // Check if login details match the signup details (replace with your logic)
    const signupEmail = 'example@example.com';
    const signupPassword = 'password123';
  
    if (loginEmail === signupEmail && loginPassword === signupPassword) {
      window.location.href = "next-page.html"; // Replace "next-page.html" with the actual URL or filename of the page you want to navigate to
      return false; // Prevent form submission
    } else {
      const loginError = document.getElementById('loginError');
      loginError.textContent = 'Invalid email or password';
      return false; // Prevent form submission
    }
  }
  