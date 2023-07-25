
const form = document.querySelector('.box-inputs');

function pesquisarLetra(cantor, musica) {

    return fetch(`https://api.lyrics.ovh/v1/${cantor}/${musica}`);

}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    fazerBuscaNaLetra();

})


async function fazerBuscaNaLetra() {

    const cantor = document.querySelector('#iartist');
    const musica = document.querySelector('#isong');
    const letra = document.querySelector('.letra');

    letra.textContent = 'Esperando...'

    // THEN
    /*pesquisarLetra(cantor.value, musica.value)
        .then((response) => response.json())
        .then((date) => {

            if (date.lyrics) {

                letra.textContent = date.lyrics;

            } else {

                letra.textContent = `Ops! Letra Não encontrada`;

            }

        })
        .catch((err) => {

            letra.textContent = `Ops! Letra Não encontrada ${err}`;

        })*/

        // ASYNC/AWAIT
        try {

            const resposta = await pesquisarLetra(cantor.value, musica.value);
            const date = resposta.json()

            if (date.lyrics) {

                letra.textContent = date.lyrics;

            } else {

                letra.textContent = date.error

            }

        } catch (err) {

            console.log(err)

        }
        
}