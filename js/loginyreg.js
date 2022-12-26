// Guardar datos de Registro
function guardarRegistro() {
    
    var email = document.getElementById('emailFormReg');
    var contrasenia = document.getElementById('passwordFormReg');

    if(email.value.length == 0){
        alert('Por favor completa con tu Email');

    }else if(contrasenia.value.length == 0){
        alert('Por favor completa con tu Contraseña');

    }else if(email.value.length == 0 && contrasenia.value.length == 0){
        alert('Por favor completa con tu Email y Contraseña');
    
    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('contrasenia', contrasenia.value);
        alert('¡Tu cuenta ha sido creada con éxito!');
    }
}

// Chequear datos de inicio de sesión
function comprobarDatos(){
    var emailGuardado = localStorage.getItem('email');
    var contraGuardada = localStorage.getItem('contrasenia');

    var emailIngresado = document.getElementById('emailForm');
    var contraIngresada = document.getElementById('passwordForm');

    if(emailIngresado.value == emailGuardado && contraIngresada.value == contraGuardada){
        alert('¡Logeado con éxito!');
        window.location.href = "../index.html";
    }else{
        alert('Error al ingresar los datos, intenta de nuevo');
    }
}