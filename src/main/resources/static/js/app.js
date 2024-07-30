function cargarContenido(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("conPrincipal").innerHTML = data;
        })
        .catch(error => console.error('Error cargando contenido',error));
}