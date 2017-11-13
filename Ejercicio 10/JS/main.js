var ventana;

function CrearVentana(){
    ventana = window.open("ventananueva.html","Nueva Ventana","width=50","height=50","top=10","left=50");
}

function mover(x,y){
    x = x || 88;
    if((x = IsNumber)&&(y = IsNumber)){
        ventana.moveTo(x,y);
    }
}
