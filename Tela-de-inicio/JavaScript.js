function mostrarTexto(id) {
    var regra = document.getElementById(id);

    if (regra.style.display === 'block' || regra.style.display === '') {
        regra.style.display = 'none';
    } else {
        regra.style.display = 'block';
    }
}