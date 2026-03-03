
window.cogerNombre = () => 
{
    let formularios = document.getElementsByTagName("form");

    let primerFormulario = formularios[0].elements["nombre"].value;;    

    alert(primerFormulario);
}


