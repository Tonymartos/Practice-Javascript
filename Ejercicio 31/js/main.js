//Variables Globales
var debug = true;
var vidas = 7;
var palabra = crearPalabra();

window.onload = function(){
    var vidainicial = document.getElementById('tvidas');
    var imagenprinc = document.getElementById('imagen');
    vidainicial.innerHTML="Vidas restantes: " + vidas;
    imagenprinc.src='img/0.png';
    palabraOculta(palabra);
    clickBotones();
}

function clickBotones(){
    var botones = document.getElementsByTagName('button');
    for(i=0,fin=botones.length;i<fin;i++){
        botones[i].addEventListener('click', compararBoton(botones[i]));
    }
}

function crearPalabra(){
    var palabras = ["Estocolmo", "Symfony", "Datos", "Zanahoria", "Aleluya", "Escuela", "Oviedo", "Python", "Javascript","Wordpress","JQuery"];
    var eligePalabra = Math.floor(Math.random()*palabras.length);
    var palabracreada = palabras[eligePalabra].toUpperCase();
    if(debug){
        console.log(palabracreada);
    }
    return palabracreada;
}

function palabraOculta(ocultopalabra){
    var campopalabra = document.getElementById('texto');
    for(i=0, fin=ocultopalabra.length;i<fin;i++){
        campopalabra.innerHTML += "_" + " ";
    }
}

function compararBoton(boton){
    var letraboton = boton.target.value;
    var campopalabra = document.getElementById('texto');
    for(i=0, fin=palabra.length;i<fin;i++){
        if(palabra.charAt(i)==letraboton){
            let addletra = document.innerHTML=letraboton;
        }else{
            restaupdateFinVida();
            updateImage();
        }
    }
}

function restaupdateFinVida(){
    var titulo = document.getElementById('titulo');
    var vida = document.getElementById('tvidas');
    var imagen = document.getElementById('imagen');
    var botones = document.getElementsByTagName('button');
    vidas--;
    vida.innerHTML="Número de vidas: " + vidas;
    if(vidas==0){
        titulo.innerHTML='HAS PERDIDO';
        titulo.style.color='white';
        titulo.style.backgroundColor='red';
        for(i=0,fin=botones.length;i<fin;i++){
            botones[i].disabled=true;
        }
    }
}

function updateImage(){
    while(vidas<=7){
        switch(vidas){
            case 0: imagen.src='img/7.png';
            break;
            case 1: imagen.src='img/6.png';
            break;
            case 2: imagen.src='img/5.png';
            break;
            case 3: imagen.src='img/4.png';
            break;
            case 4: imagen.src='img/3.png';
            break;
            case 5: imagen.src='img/2.png';
            break;
            case 6: imagen.src='img/1.png';
            break;
            case 7: imagen.src='img/0.png';
            break;
        }
    }
}


