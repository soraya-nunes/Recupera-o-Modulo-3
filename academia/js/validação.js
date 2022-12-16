const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const rgRegex = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\-?[A-Za-z0-9]{1}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  sobrenomeValidate();
  emailValidate();
  rgValidate() 
  mainPasswordValidate();
  comparePassword();
});

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  }
  else {
    removeError(0);
  }
}

function sobrenomeValidate() {
  if (campos[1].value.length < 3) {
    setError(1);
  }
  else {
    removeError(1);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2);
  }
  else {
    removeError(2);
  }
}

function rgValidate() {
  if (!rgRegex.test(campos[3].value)) {
    setError(3);
  }
  else {
    removeError(3);
  }
}

function mainPasswordValidate() {
  if (campos[4].value.length < 8) {
    setError(4);
  }
  else {
    removeError(4);
    comparePassword();
  }
}

function comparePassword() {
  if (campos[4].value == campos[5].value && campos[5].value.length >= 8) {
    removeError(5);
  }
  else {
    setError(5);
  }
}

function simularEnvio() {
    let validado = true;
  
    document.querySelectorAll("[required]").forEach(function (i) {
      if (validado == false) {
        return;
      }
      if (i.type === "text") {
        if (!i.value) {
          validado = false;
          return;
        }
      }
    });
  
    if (validado) {
      document.getElementById("confirmacaoDeEnvio").classList.toggle("d-none");
    }
  
  }
