const userName = document.querySelector('.userName')

function sendName() {
  const name = userName.value

  window.localStorage.setItem('nombre', name);
}

