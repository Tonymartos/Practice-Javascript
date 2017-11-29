window.onload = function(){
    var resolucion = screen.width+"x"+screen.height;
    var parrafo = document.getElementById('parrafo');
    parrafo.textContent="Resolución actual: " + resolucion;
    var valor = document.getElementsByTagName('input');
    for( i=0, fin=valor.length; i<fin; i++){
        if(valor[i].id == resolucion){
            valor[i].checked=true;
        }
    }
}
