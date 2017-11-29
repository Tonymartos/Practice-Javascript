window.onload = function multiplicacion(){
    var multiplicar = prompt('Ingrese el número para multiplicar');
    var generatabla = document.createElement('table');
    

    document.write("<h1>Multiplicación del número \n"+ multiplicar + "</h1>");

    for(var i=0; i<=10; i++){
        var generafila = document.createElement('tr');
        var generacelda = document.createElement('td');
        var celdatexto = document.createTextNode(multiplicar+"\n"+"x\n"+i+"\n=\n"+(multiplicar*i));
        
        generacelda.appendChild(celdatexto);
        generafila.appendChild(generacelda);
        generatabla.appendChild(generafila);
    }
    document.body.appendChild(generatabla);
    
}