// Mostra el text secret quan el ratolí entra a la secció.
function mostrarMalediccio() {
    document.getElementById("malediccio").classList.add("destacat");
    document.getElementById("textMalediccio").classList.add("visible");
}

// Amaga el text i restaura els colors quan el ratolí surt.
function amagarMalediccio() {
    document.getElementById("malediccio").classList.remove("destacat");
    document.getElementById("textMalediccio").classList.remove("visible");
}
