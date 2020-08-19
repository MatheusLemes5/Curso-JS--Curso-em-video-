function parimpar(numero) {

    if (numero % 2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

let valor = 11;
let num = parimpar(valor);
console.log(`O número ${valor} é ${num}`);