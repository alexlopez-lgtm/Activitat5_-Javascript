// Comptador del temps que l'usuari passa a la pàgina.
let segons = 0;

function actualitzarRellotge() {
    segons++;

    const hores = Math.floor(segons / 3600);
    const minuts = Math.floor((segons % 3600) / 60);
    const segonsRestants = segons % 60;

    const format = (valor) => String(valor).padStart(2, "0");

    document.getElementById("rellotge").textContent =
        "TEMPS EN AQUEST REGNE: " +
        format(hores) + ":" + format(minuts) + ":" + format(segonsRestants);
}

setInterval(actualitzarRellotge, 1000);
