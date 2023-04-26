const form = document.getElementById('login-form');
const webauthButton = document.getElementById('webauth-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  doLogin(username, password);
});

function doLogin(username, password) {
  fetch('http://localhost:8080/animesite/login', {
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

function handleLoginResult(data) {
  if (data.success) {
    alert('Login bem sucedido!');
  } else {
    alert('Usuário ou senha incorretos.');
  }
}

webauthButton.addEventListener('click', () => {
  window.location.href = 'http://localhost:8080/animesite/login.html'; // substitua a URL pelo endpoint da sua aplicação WebAuth
});
