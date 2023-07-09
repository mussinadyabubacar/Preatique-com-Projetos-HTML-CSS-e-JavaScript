const input = document.querySelector('.input');
const btnCopy = document.querySelector('.btn-copy');
const btnGenerator = document.querySelector('.btn-generator');

btnGenerator.addEventListener('click', () => {

    let randomSting = Math.random().toString(36).slice(-10);
    // console.log(randomSting)

    input.value = randomSting;

});

btnCopy.addEventListener('click', () => {

    navigator.clipboard.writeText(input.value);

    input.value = 'TEXTO COPIADO'

})