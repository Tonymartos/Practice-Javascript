
//Variables globales
var debug = true;
var messageerror = "Expresión incorrecta";
var pglobal = document.getElementById('eglobal');
var messageglobal = "Hay campos incorrectos";

window.onload = function () {
    leervalidar();
}

function leervalidar() {
    var celdanombre = document.getElementById('name');
    celdanombre.addEventListener('change', function () {
        comprobarNombre(celdanombre);
    });

    var alias = document.getElementById('alias');
    alias.addEventListener("change", function () {
        comprobarAlias(alias);
    });

    var password = document.getElementById('password');
    password.addEventListener("change", function () {
        comprobarContrasenia(pass);
    });

    var repassword = document.getElementById('rpassword');
    repassword.addEventListener("change", function () {
        passRepetida(password, repassword);
    });

    fechaDeNacimiento(1920, 2017);
}

function comprobarNombre(nombre) {
    var exnombre = /^[A-Z]{1}[a-z]{9}/;
    var errorname = document.getElementById('ename');
    if (exnombre.test(nombre) == false) {
        nombre.style.background = error;
        errorname.innerHTML = messageerror;
        errorname.style.color = colorletraerror;
    }
}

function comprobarAlias(a) {
    var contAlias = a.value;
    var eAlias = /^[A-Z,a-z,0-9]{3,14}$/;
    if (comprobarExpresion(a, eAlias) == true) {
        validado[1] = true;
    }
}

function comprobarPass(p) {
    var contContrasenia = c.value;
    var epass = /^[A-Z, a-z, 0,9]{6,20}$/;
    if (comprobarExpresion(p, epass) == true) {
        validado[2] = true;
    }
}

function passRepetida(pass1, pass2) {
    if (pass1.value != pass2.value) {
        pass2.value = "La contraseña es distinta";
        pass2.className = "error";
    } else {
        pass2.className = "correcto";
        validado[3] = true;
    }
}

function fechaDeNacimiento(numInferior, numSuperior) {
    var valores = "";
    var fecha = document.getElementById('year');
    for (i = numInferior; i <= numSuperior; i++) {
        valores += "<option value='" + i + "'>" + i + "</option>";
    }
    fecha.innerHTML = valores;
}

function comprobarExpresion(p, e) {
    var nombre = p.value;
    var retorno = false;
    if (e.test(nombre) == false) {
        p.value = "Dato incorrecto";
        p.className = "error";
        pglobal.innerHTML = messageerror;
    } else {
        p.className = "correcto";
        retorno = true;
    }
    return retorno;
}

function enviarFormulario() {
    var formValidado = comprobarFormulario();
    if (formValidado == true) {
        alert("El formulario se ha enviado con exito.");
    } else {
        alert("El formulario no se ha enviado, vuelva a enviarlo por favor.");
    }
}

function grabar(){
    var alltexto = document.getElementsByName('texto');
    for(i=0;i<nuevotexto.length;i++){
        
    }
}

