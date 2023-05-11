const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from signup form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const birthdate = document.querySelector('#birthdate-signup').value.trim();
    
    //Send post request to API endpoint
    if (username && email && password && firstName && lastName && birthdate) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, firstName, lastName, birthdate }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // If signup successful, redirect to dashboard page
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);