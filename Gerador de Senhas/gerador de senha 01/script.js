const inputRange = document.querySelector('.range')
const btnGenerator = document.querySelector('.btn-generator')
const resultBoxPassword = document.querySelector('.result-box-pwd')
const rangeValue = document.querySelector('.range-value')
let password = document.querySelector('.pwd')
let charts = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@";


rangeValue.textContent = inputRange.value;
inputRange.addEventListener('input', () => {

    rangeValue.textContent = inputRange.value;

})

btnGenerator.addEventListener('click', () => {

    let pwd = '';

    for (let i = 0, n = charts.length; i < inputRange.value; i++) {

        pwd += charts.charAt(Math.floor(Math.random() * n));

    }

    // console.log(pwd)
    resultBoxPassword.classList.remove('hide')
    password.textContent = pwd;
})

password.addEventListener('click', () => {

    navigator.clipboard.writeText(password.textContent);

    setTimeout( function () {

        password.textContent = 'Senha Copiada √'

    }, 100)
})
