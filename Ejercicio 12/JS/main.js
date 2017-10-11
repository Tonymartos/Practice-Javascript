window.onload=function(){
    contador=0;    
    setInterval(cambiarImagen, 2500);
}

function cambiarImagen(){
    var arrayimages = ["imagenes/uno.png","imagenes/dos.jpg","imagenes/tres.png"];
    document.getElementById("imagen").src=arrayimages[contador];
    contador += 1;
    if(contador==arrayimages.length){
        contador=0;
    }
}