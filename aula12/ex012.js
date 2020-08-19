var horaAtual = new Date(); // Pegar hora atual do sistema
var hora = horaAtual.getHours();

console.log(`Agora são extamente ${hora} horas`);

if (hora < 12) {
    console.log('Bom Dia');
} else if (hora <= 18) {
    console.log('Boa Tarde');
} else {
    console.log('Boa Noite');
}