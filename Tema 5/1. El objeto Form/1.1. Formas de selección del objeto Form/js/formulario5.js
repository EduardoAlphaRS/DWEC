
window.cogerNombre = () => 
{

    let menu = document.getElementById("menulateral");
    let formularios = menu.getElementsByTagName("form");       // formularios contenidos en el menu lateral
    let primerFormulario =  formularios[0];             

    alert(primerFormulario.elements["nombre"].value);
}


