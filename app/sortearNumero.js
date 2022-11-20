const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto =  gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Numero secreto", numeroSecreto);

const elementoMenorValor = document.getElementById('menor');
const elementoMaiorValor = document.getElementById('maior');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;