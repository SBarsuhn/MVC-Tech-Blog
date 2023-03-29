const login = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to login')
        }
    }
}

const signup = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': "application/json" },
        });

        if (response.ok) {
            document.location.replace('/')
            // document.querySelector('#resultText').innerText = ` -- Logged in as ${username} -- `;
        } else {
            alert('Failed to sign up')
        }
    }
}

const passwordInput = document.getElementById('password-signup');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.setAttribute('aria-label',
      'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.setAttribute('aria-label',
      'Show password as plain text. ');
  }
}










document.querySelector('#login-form').addEventListener('submit', login);
document.querySelector('#signup-form').addEventListener('submit', signup);