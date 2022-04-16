function toggleButton() {
    const inputEmail = document.querySelector('#inputEmail').value;
    const inputPassword = document.querySelector('#inputPassword').value;
  
    if (inputEmail && inputPassword) {
      document.querySelector('#botaoSalvar').disabled = false;
      return
    }
    document.querySelector('#botaoSalvar').disabled = true;
  }