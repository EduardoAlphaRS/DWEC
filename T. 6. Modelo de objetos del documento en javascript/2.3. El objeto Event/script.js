// Definir la función antes de usarla

const gestionar = (miEvento) => {
     alert (miEvento.type);  // Mostrará una alerta con el tipo de evento que en este caso es 'click'.
}


// Esperar a que el DOM esté listo para encontrar el ID "unParrafo"
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("unParrafo").addEventListener('click', gestionar, false);
});

