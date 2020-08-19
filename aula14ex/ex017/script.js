function gerar() {

    let numero = window.document.getElementById('numero');
    let resultado = window.document.getElementById('tabuada');
    let num = Number(numero.value);

    if (numero.value.length == 0) {

        window.alert('Você precisa digitar um número!');

    } else {

        resultado.innerHTML = '';
        for (var i = 0, multiplicacao = 0; i <= 10; i++) {
            let item = document.createElement('option'); // Se cria um elemento option para pode escrever dentro do selection
            item.text = `${i} X ${num} = ${i * num}`; // Escreve dentro das options
            item.value = `tabuada_${i}`; // Nomeia os values dos options
            resultado.appendChild(item); // Se coloca o elemento option dentro do select

        }
    }
}