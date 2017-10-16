window.onload = function(){
    var numero = prompt("Introduce un numero para el tamaño de la fuente en (em)");
    var texto = prompt("Introduce un texto");
    
    document.body.style.fontSize = numero + "em";
    document.write(texto);
}