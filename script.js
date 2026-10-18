const textoConsejo = document.getElementById("consejo");
const btnObtener = document.getElementById("btn-obtener");

// Función ASÍNCRONA para pedir datos a un servidor externo (API)
async function obtenerConsejo() {
    textoConsejo.textContent = "Buscando consejo...";
    
    try {
        // 1. Hacemos la petición a la API pública de consejos
        const respuesta = await fetch("https://api.adviceslip.com/advice");
        
        // 2. Convertimos la respuesta recibida en un objeto JSON entendible
        const datos = await respuesta.json();
        
        // 3. Mostramos en pantalla el consejo que nos envió el servidor
        textoConsejo.textContent = datos.slip.advice;
    } catch (error) {
        // En caso de que falle la conexión o no haya internet
        textoConsejo.textContent = "¡Ups! Ocurrió un error al consultar la API.";
        console.error("Error:", error);
    }
}

// Escuchamos el clic del botón para ejecutar la función
btnObtener.addEventListener("click", obtenerConsejo);

// Ejecutamos una vez al abrir la página para cargar el primer consejo
// obtenerConsejo();