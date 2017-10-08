window.onload=function(){
    contador=0;    
    setInterval(cambiarimagen, 2500);
}

function cambiarimagen(){
    var arrayimages = ["imagenes/uno.png","imagenes/dos.jpg","imagenes/tres.png"];
    document.images[0].src=arrayimages[contador];
    contador += 1;
    
    if(contador==arrayimages.lengths - 1){
        contador=0;
    }
}
