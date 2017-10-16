

function agrandar(){
document.getElementById('imagen').style.width='456px';
document.getElementById('imagen').style.height='473px';
document.getElementById('imagen').style.borderRadius='20px';
setTimeout(mostrar(),2000);
}

function volver() {
document.getElementById('imagen').style.width='20px';
document.getElementById('imagen').style.height='20px';
document.getElementById('imagen').style.borderRadius='1px'
}