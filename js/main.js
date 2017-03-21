function translate() {
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];

  title.innerHTML = "Por favor inicia sesion";
  email.placeholder = "Correo Electronico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
translate();

function datos(){
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;
  document.getElementById('titulo').innerHTML= "Datos de formulario";
  document.getElementById('texto').innerHTML= "El correo electrónico ingresado es: <br>" + email + "<br>La clave ingresada es:<br>" + password;
}
