function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = window.document.getElementById('idade');
    var res = window.document.getElementById('resultado');

    if (anoNasc.value.length == 0 || anoNasc > ano) { // Verfica se tem alguma coisa escrita na caixa

        window.alert('[ERRO] Verifique se seus dados estão corretos e tente novamente');

    } else {

        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(anoNasc.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'imagem');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'img/homembebe.png');

            } else if (idade < 21) {

                img.setAttribute('src', 'img/homemjovem.png');

            } else if (idade < 50) {

                img.setAttribute('src', 'img/homemadulto.png');

            } else {

                img.setAttribute('src', 'img/homemidoso.png');

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {

                img.setAttribute('src', 'img/mulherbebe.png');

            } else if (idade < 21) {

                img.setAttribute('src', 'img/mulherjovem.png');

            } else if (idade < 50) {

                img.setAttribute('src', 'img/mulheradulta.png');

            } else {

                img.setAttribute('src', 'img/mulheridosa.png');

            }
        }

        res.innerHTML = `<p>Dectetamos ${genero} com ${idade} anos</p>`; // a tag p foi importante para o alinhamento da imagem
        res.appendChild(img); // coloca um elemento filho dentro da div

    }

}