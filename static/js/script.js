import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { app } from './firebase.js';

const analytics = getAnalytics(app);

export { app, analytics };

const form = document.getElementById('login-form');
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  console.log('Username:', user.username);
}

const usernameForm = document.getElementById('username-form');
if (usernameForm) {
  usernameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUsername = usernameForm['new-username'].value;

    const user = JSON.parse(localStorage.getItem('user'));
    user.username = newUsername;
    localStorage.setItem('user', JSON.stringify(user));

    window.location.href = '/';  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  doLogin(username, password);
});

function doLogin(username, password) {
  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username, password: password})
  })
  .then(response => response.json())
  .then(data => handleLoginResult(data))
  .catch(error => {
    console.error(error);
    alert('Ocorreu um erro durante o login.');
  });
}
const googleLoginButton = document.getElementById('google-login-button');
googleLoginButton.addEventListener('click', signInWithGoogle);


async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Usuário autenticado:', user);
    
    // Save user data here, for example, in local storage or send it to your backend
    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirect the user to the username input page
    window.location.href = '/username';
  } catch (error) {
    console.error('Erro durante a autenticação:', error);
  }
}

function handleLoginResult(data) {
  if (data.success) {
    alert('Login bem sucedido!');
  } else {
    alert('Usuário ou senha incorretos.');
  }
}