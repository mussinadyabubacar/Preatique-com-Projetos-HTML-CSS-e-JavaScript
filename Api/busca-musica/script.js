
const form = document.querySelector('.box-inputs');

function pesquisarLetra(cantor, musica) {

    return fetch(`https://`)

}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    fazerBuscaNaLetra();

})


function fazerBuscaNaLetra() {

    const cantor = document.querySelector('#iartist');
    const musica = document.querySelector('#isong');
    const letra = document.querySelector('.letra');

    letra.textContent = 'Esperando...'

    pesquisarLetra(cantor.value, musica.value)
        .then((resposta) => resposta.json())
        .then((date) => {

            if (date.lirycs) {

                letra.textContent = date.lirycs;

            } else {

                letra.textContent = date.error;

            }

        })
        .catch((err) => {

            letra.textContent = `Ops! Letras Não encontrada ${err}`;

        })
}