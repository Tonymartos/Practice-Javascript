var ventana;

function CrearVentana(){
    ventana = window.open("ventananueva.html","Nueva Ventana","width=100","height=100","top=10","left=100");
}

function mover(x,y){
    x = x || 88;
    if((x = IsNumber)&&(y = IsNumber)){
        ventana.moveTo(x,y);
    }else{
        document.write("No son números, introduce numeros enteros, por favor");
    }
}
