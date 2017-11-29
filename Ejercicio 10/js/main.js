window.onload = function(){
    var crearventana = document.getElementById('newventana').addEventListener('click', crearVentana);
    var supleftventana = document.getElementById('ventanasupleft').addEventListener('click', mover(200,100));
    var inferiorleftventana = document.getElementById('ventanainferiorleft').addEventListener('click', mover());
    var suprightventana = document.getElementById('ventanasupright').addEventListener('click',mover());
    var inferiorrightventana = document.getElementById('ventanainferiorright').addEventListener('click', mover());
}

function crearVentana(){
    window.open("ventananueva.html","Nueva Ventana","width=100,innerWidth=100,height=100,innerHeight=100,left=100,top=100");
}

function mover(x,y){
    x = x || 88;
    if((x == )&&(y == )){
        window.moveTo(x,y);
    }
}