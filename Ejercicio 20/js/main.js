window.onload = function(){
    var detectar = navigator.userAgent;
    imagennavegador(detectar);
}

function imagennavegador(detectarnav){

    var colocarimagen = document.getElementById('imagen');
    
    if(detectarnav.indexOf('Firefox') !=-1){
        colocarimagen.src="img/firefox.png";
    }else if(detectarnav.indexOf('Chrome') !=-1){
        colocarimagen.src="img/chrome.png";
    }else if(detectarnav.indexOf('Edge') !=-1){
        colocarimagen.src="img/iexplorer.png";
    }
}