function mostrarTexto(id) {
    var regra = document.getElementById(id);

    if (regra.style.display === 'block' || regra.style.display === '') {
        regra.style.display = 'none';
    } else {
        regra.style.display = 'block';
    }
}

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    if (window.scrollY > 100) {
        footer.classList.remove("hidden");
    } else {
        footer.classList.add("hidden");
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    var smoothScroll = function() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothScroll);
            window.scrollTo(0, currentScroll - currentScroll / 8);
        }
    };
    smoothScroll();
});
