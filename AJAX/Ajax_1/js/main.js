let debug = true;

function iniciar() {
    "use strict";    
    let consulta = document.getElementById('btnConsultar');
    consulta.addEventListener("click", consultar);
}

function consultar() {
    "use strict";    
    let url = "http://daw2.iesoretania.es/recursos/bd_leer_agenda.php";
    let lecturaBD = function(e){
        //Cogemos el input y añade el evento
        let datos = e.target;
        let log = document.getElementById('mensajelog');
        if(debug){
            console.log(datos);
        }
        //Verificar si la conexión es correcta
        if(datos.status === 200){
            if(debug){
                console.log("Conexion correcta");
            }
            //Nos da los datos de PHP (nos ofrece el row de toda la información)
            let respuesta = JSON.parse(datos.responseText);
            log.innerHTML='Consulta realizada con exito';
            log.className="alert alert-success";
            if(debug){
                console.log(respuesta.row.lenght);
            }
            //Recuperar input y poner datos de la base de datos
            document.getElementById('alias').value = respuesta.row.Alias;
            document.getElementById('firtsname').value = respuesta.row.Nombre;
            document.getElementById('lastname').value = respuesta.row.Apellidos;
            document.getElementById('born').value = respuesta.row.Fecha_Nacimiento;
            document.getElementById('address').value = respuesta.row.Direccion;
            document.getElementById('phone').value = respuesta.row.Telefono;
            document.getElementById('email').value = respuesta.row.Email;
            document.getElementById('idMunicipio').value = respuesta.row.Poblacion;
            document.getElementById('obser').value = respuesta.row.Observaciones;
            document.getElementById('foto').src=`data:image/jpg;base64,${respuesta.row.foto}`;
        }
    };

    let insertarBD = () => {
        
    };
    
    //Funcion autoejecutable para coger el id introducido en el campo input texto para enviarlo
    let misDatos = () => {
        let auxID = document.getElementById('id').value;
        let auxForm = new FormData();
        auxForm.append('txtid', auxID);
        return auxForm;
    };

    let solicitud = new window.XMLHttpRequest();
    solicitud.addEventListener("load", lecturaBD);
    solicitud.open('POST', url, true);
    solicitud.send(misDatos);
}

window.addEventListener('DOMContentLoaded', iniciar);