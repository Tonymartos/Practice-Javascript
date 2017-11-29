//Variables Globales
var imagenes = document.getElementsByName("imagen");
var imagenAmp = document.getElementById("imagenAmpliada");
//Fin-Variables
window.onload = function(){
    var agrandaruno = imagenes[0].addEventListener("click", clickImagenuno);
    var agrandardos = imagenes[1].addEventListener("click", clickImagendos);
    var agrandartres = imagenes[2].addEventListener("click", clickImagentres);
}

function clickImagenuno(){   
    window.open("pagina-2.html");          
    imagenAmp.src ="img/uno.jpeg";
    imagenAmp.style.width="50%";        
}

function clickImagendos(){
    window.open("pagina-2.html");
    imagenAmp.src = "img/dos.jpeg";
    imagenAmp.style.width = "50%";        
}

function clickImagentres(){
    window.open("pagina-2.html");
    imagenAmp.src = "img/tres.jpeg";
    imagenAmp.style.width = "50%";        
}