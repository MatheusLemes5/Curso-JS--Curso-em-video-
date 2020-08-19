let num = window.document.getElementById('numero');
let lista = window.document.getElementById('lista');
let resultado = window.document.getElementById('resultado');
let valores = [];

function isNumero(n) { // Testa se é um número está entre 1 e 100

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }

}

function inLista(n, l) { // Testa se o valor já está na lista 

    if (l.indexOf(Number(n)) != -1) {
        return false;
    } else {
        return true;
    }
}

function adicionar() {

    if (isNumero(num.value) && inLista(num.value, valores)) {

        valores.push(Number(num.value)); // É importante colocar o Number() pois ele ajuda a a colocar o valor de num como número e não como string  
        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado`;
        lista.appendChild(item);
        resultado.innerHTML = ''; // Limpa as informações do select 

    } else {
        window.alert('Valor invalido ou já existente na tabela!');
    }

    num.value = '';
    num.focus(); // Coloca o foco no objeto num 

}

function finalizar() {

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {

        let total = valores.length;
        let media = 0;
        let soma = 0;
        let maiorValor = Math.max.apply(null, valores); // Pega o maior valor do array
        let menorValor = Math.min.apply(null, valores); // Pega o menor valor do array

        for (let pos in valores) {
            soma = soma + valores[pos];
        }

        media = soma / Number(valores.length);

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>O tamanho do array é: ${total}</p>`;
        resultado.innerHTML += `<p>O maior valor do array é: ${maiorValor}</p>`;
        resultado.innerHTML += `<p>O menor valor do array é: ${menorValor}</p>`;
        resultado.innerHTML += `<p>A soma de todos os valores do array é: ${soma}</p>`;
        resultado.innerHTML += `<p>A média da soma de todos os valores é: ${media}</p>`;

    }

}