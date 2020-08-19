let num = [4, 8, 6, 5, 7];

num.push(9); // Cria e coloca o valor entre parenteses no ultimo espaço do vetor 
num.sort(); // Organiza o vetor por ordem crescente
console.log(num);
console.log(`O meu vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8); // Mostra em qual indice o valor entre parenteses está
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor 8 está no indice ${pos}`);
}

// Quando não existe o valor indicado no vetor, o indexOf retorna o valor -1