window.onload=function(){
    var guardar = document.getElementById('btnguardar');
    var borrar = document.getElementById('btnborrar');
    guardar.addEventListener('click', guardar);
    borrar.addEventListener('click', borrar);
}

function guardar(){
    var texto = document.getElementById('textnombre').value;
    var textsave = localStorage.setItem(contador,texto);

}

function borrar(){
    clear();
}

function leer() {
    var textoarea = document.getElementById('textoarea');
    for( i=0; i<localStorage.length;i++){                      
        var clave = localStorage.key(i);
        var valor = localStorage.getItem(clave);
        textoarea.innerHTML += valor+" ";
    }
}