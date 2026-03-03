
window.cogerNombre = () => 
{

    let primerFormulario = document.getElementsByTagName("form")[0] ;

    
    let nombre = primerFormulario.elements["nombre"].value;;    

    alert(nombre);
}


