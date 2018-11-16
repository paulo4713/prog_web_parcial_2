window.addEventListener('load', function () {

    fetch('/visita?visita=1')
        .then(b => b.text())
        .then(alert)
        .catch(console.error);

});