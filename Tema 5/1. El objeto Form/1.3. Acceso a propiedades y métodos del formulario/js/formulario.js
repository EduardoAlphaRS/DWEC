window.recorrerFormulario = () => 
{
    let miFormulario = document.getElementById("contactar");    // guardamos la referencia del formulario en una variable.

    if (! miFormulario) return false;        // Si no existe ese formulario devuelve false.


    for (let i=0; i< miFormulario.elements.length; i++) 
    {
        if (miFormulario.elements[i].type == "text") 
        {
            miFormulario.elements[i].value = "";
        }
    }

}


