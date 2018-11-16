window.addEventListener('load', function () {

    fetch('/visita?visitaA=1')
        .then(b => b.text())
        .then(alert)
        .catch(console.error);

});