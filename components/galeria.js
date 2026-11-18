// Canvia la imatge gran quan l'usuari selecciona una miniatura.
function canviarImatge(ruta, descripcio) {
    document.getElementById("imatgeGran").src = ruta;
    document.getElementById("imatgeGran").alt = descripcio;
    document.getElementById("peuImatge").textContent = descripcio;
}
