let amigo = {
    nome: 'Matheus',
    idade: '24',
    peso: 73,
    engordar(p) {
        this.peso += p;
    }

}

amigo.engordar(2);
console.log(`${amigo.nome} está pesando ${amigo.peso}Kg`);

/* Se consegue colocar uma função dentro do objeto*/