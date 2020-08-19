function contar() {

    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let resultado = window.document.getElementById('resultado');

    let ini = Number(inicio.value);
    let f = Number(fim.value);
    let pas = Number(passo.value);

    resultado.innerHTML = ``;
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        window.alert('[ERO] Faltam alguns dados!')
        resultado.innerHTML = `<p>Impossivel contar!</p>`;

    } else {

        resultado.innerHTML = `Contando:<br>`;
        if (pas <= 0) {
            window.alert('Você não pode usar o ZERO! Alteramos para passo igual a UM!');
            pas = 1;
        }
        if (ini < f) {

            for (var c = ini; c <= f; c = c + pas) {
                resultado.innerHTML += `${c} &#128073;`;
            }
        }
        if (ini > f) {

            for (var c = ini; c >= f; c = c - pas) {
                resultado.innerHTML += `${c} &#128073;`;
            }
        }
        resultado.innerHTML += `&#127937;`;
    }

}