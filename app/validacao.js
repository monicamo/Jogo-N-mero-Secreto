function verificaSeChuteTemValorValido(chute) {
    const numero = +chute;

    if (ChuteEhInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(numeroForMaiorOiMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou!</h2>
            <h3> O número secreto era ${numeroSecreto} !</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `;

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;       
    }
}

function ChuteEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOiMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.addEventListener('click', e => {
    if (e.target.id = 'jogarNovamente') {
        window.location.reload();
    }
})