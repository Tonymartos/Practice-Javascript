//Variables globales
var debug = true;
var error = "#ff3243";
var colorletraerror = "#ff3243";
var messageerror = "Expresión incorrecta";
var pglobal = document.getElementById('eglobal');
var messageglobal = "Hay campos incorrectos";

window.onload = function(){
    comprobarCampos();
    leervalidar();
}

function comprobarCampos(){
    var campos = document.getElementsByTagName("input");
    for(i=0, fin=campos.length;i<fin;i++){
        if(campos[i].type != 'text'){
            if(debug){
                console.log("Hay campos que no son de tipo 'text'");
            }
        }
    }
}

function leervalidar(){
    var celdanombre = document.getElementById('name');
    celdanombre.addEventListener('change', function(){
        comprobarNombre(celdanombre);
    });

    var celdadireccion = document.getElementById('address');
    celdadireccion.addEventListener('change', function(){
        comprobarDireccion(celdadireccion);
    });

    var celdatelefono = document.getElementById('phone');
    celdatelefono.addEventListener('change', function(){
        comprobarTelefono(celdatelefono);
    });

    var celdadni = document.getElementById('dni');
    celdadni.addEventListener('change', function(){
        comprobarDNI(celdadni);
    });

    var celdaemail = document.getElementById('email');
    celdaemail.addEventListener('change', function(){
        comprobarEmail(celdaemail);
    });

    var celdalocalidad = document.getElementById('local');
    celdalocalidad.addEventListener('change', function(){
        comprobarLocalidad(celdalocalidad);
    });

    var celdaprovincia = document.getElementById('state');
    celdaprovincia.addEventListener('change', function(){
        comprobarProvincia(celdaprovincia);
    });
}

function comprobarNombre(nombre){
    var exnombre = /^[A-Z][a-z]/;
    var errorname = document.getElementById('ename');
    if(exnombre.test(nombre)==false){
        nombre.style.background=error;
        errorname.innerHTML=messageerror;
        errorname.style.color=colorletraerror;
        pglobal.innerHTML=messageerror;
    }
}

function comprobarDireccion(direccion){
    var exdireccion = /^[A-Z][a-z][0-9]/;
    var erroraddress = document.getElementById('eaddress');
    if(exdireccion.test(nombre)==false){
        direccion.style.background=error;
        erroraddress.innerHTML=messageerror;
        erroraddress.style.color=colorletraerror;
        pglobal.innerHTML=messageerror;
    }
}

function comprobarTelefono(telefono){
    var extelefono = /^[0-9]{9}/;
    var errorphone = document.getElementById('eaddress');
    if(extelefono.test(nombre)==false){
        telefono.style.background=error;
        errorphone.innerHTML=messageerror;
        errorphone.style.color=colorletra;
        pglobal.innerHTML=messageerror;
        pglobal.innerHTML=colorletraerror;
    }
}

function comprobarDNI(dni){
    var exdni = /^[0-9]{8}[A-Z]{1}$/;
    var errordni = document.getElementById('eaddress');
    if(exdni.test(nombre)==false){
        dni.style.background=error;
        errordni.innerHTML=messageerror;
        errordni.style.color=colorletraerror;
    }
}

function comprobarEmail(email){
    var exemail = /^[A-Z,a-z,_,0-9]+@[A-Z,a-z,0-9]+.[a-z]{2,3}$/i;
    var erroremail = document.getElementById('eaddress');
    if(exemail.test(nombre)==false){
        email.style.background=error;
        erroremail.innerHTML=messageerror;
        erroremail.style.color=colorletraerror;
        pglobal.innerHTML=messageerror;
    }
}

function comprobarLocalidad(localidad){
    var exlocalidad = /^[A-Z][a-z]/;
    var errorlocal = document.getElementById('elocal');
    if(exlocalidad.test(nombre)==false){
        localidad.style.background=error;
        errorlocal.innerHTML=messageerror;
        errorlocal.style.color=colorletraerror;
    }
}

function comprobarProvincia(provincia){
    var exprovincia = /^[A-Z][a-z]/
    var errorstate = document.getElementById('estate');
    if(exprovincia.test(nombre)==false){
        provincia.style.background=error;
        errorstate.innerHTML=messageerror;
        errorstate.style.color=colorletraerror;
        pglobal.innerHTML=messageerror;
    }
}